import captainModel from "../models/captainModel.js";
import { validationResult } from "express-validator";
import  createCaptain  from "../Services/captain.service.js";
import blacklistTokenModel from "../models/blacklistToken.model.js";
import bcrypt from "bcrypt";

export const createCaptainController = async (req ,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    
    try {
        const {fullname , email, password, vehicle} = req.body;
        // console.log(firstname , lastname , email, password, vehicle)
        
        if(!fullname.firstname || !email || !password || !vehicle) {
            return res.status(403).json({ message: "Please fill all the fields" });
        }
        const isAlreadyExist = await captainModel.findOne({email});
        if (isAlreadyExist) {
            return res.status(403).json({ message: "Captain already exists" });
        }
       
        const hashedPassword = await captainModel.hashPassword(password);
        const captain = await createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password : hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            type: vehicle.type,
            capacity: vehicle.capacity
        });
        if (!captain) {
            return res.status(403).json({ message: "Captain not created" });
        }
        // console.log(captain);
        const token = captain.generateAuthToken();
        res.cookie("token", token);
        res.status(201).json({token , captain});
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message });
    }
}

export const loginCaptainController = async (req, res) => {
  try {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    
    const {email, password} = req.body;
    if (!email || !password) {
      return res.status(403).json({ message: "Please fill all the fields" });   
    }
    
    const captain = await captainModel.findOne({email}).select("+password"); 
    if (!captain) {
      return res.status(403).json({ message: "Captain not found" }); 
    }
    console.log(captain)
    // console.log(captain.password,(await bcrypt.hash(password, 10)))
    
    if (!captain) {
      return res.status(403).json({ message: "Captain not found" }); 
    }
    const isMathed = await captain.comparePassword(password);
    console.log(isMathed) // Compare the password with the hashed password
    if(!isMathed) {
      return res.status(400).json({ message: "Invalid credentials" }); 
    }
    const token = captain.generateAuthToken();
    res.cookie("token" , token);
   
    res.status(200).json({token , captain});

    
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "Internal server error" });
  }
}

export const getCaptainProfileController = async (req, res) => {
res.status(200).json({captain : req.captain});
}


export const logoutCaptainController = async (req, res) => {
  try {
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    await blacklistTokenModel.create({ token: token });
    res.status(200).json({ message: "Logout successfully" });

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "Internal server error" });
  }
};
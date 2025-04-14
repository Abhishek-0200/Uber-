import { validationResult } from 'express-validator';
import User from '../models/user.model.js';
import { createUser } from '../Services/user.service.js';
import userModel from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const registerController = async (req, res, next) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  if (!fullname || !email || !password) {
    return res.status(403).json({ message: "Please fill all the fields" });   
  }

  const isAlreadyExist = await User.findOne({ email });
  if (isAlreadyExist) {
    return res.status(403).json({ message: "User already exists" }); 
  }

  const hashedPassword = await User.hashPassword(password);
  const user = await createUser({ firstname : fullname.firstname, lastname : fullname.lastname, email, password: hashedPassword });

  const token = user.generateAuthToken();

  res.status(201).json({token , user});
};


export const loginController = async (req, res) => {
  try {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    
    const {email, password} = req.body;
    if (!email || !password) {
      return res.status(403).json({ message: "Please fill all the fields" });   
    }
    
    const user = await userModel.findOne({email}).select("+password"); 
    if (!user) {
      return res.status(403).json({ message: "User not found" }); 
    }
    console.log(user.password)
    // const isMathed = await user.comparePassword(password);
    const isMathed = await bcrypt.compare(password, user.password); // Compare the password with the hashed password
    if(!isMathed) {
      return res.status(403).json({ message: "Invalid credentials" }); 
    }
    const token = user.generateAuthToken();
    res.status(200).json({token , user});

    
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "Internal server error" });
  }
}
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import blacklistTokenModel from "../models/blacklistToken.model.js";
import userModel from "../models/user.model.js";
import captainModel from "../models/captainModel.js";
dotenv.config();


export const authUser = async (req, res, next) => {
  try {
    console.log("check 1");

    // Correctly retrieve the token from cookies or Authorization header
    let token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    console.log("Authorization Header:", req.headers.authorization);
    console.log("Cookies:", req.cookies);
    console.log("Token:", token);

    if (!token) {
      console.log("Token not found");
      return res.status(401).json({ message: "Token not found" });
    }

    // Check if the token is blacklisted
    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Blacklisted: Unauthorized" });
    }
    console.log("check 2");

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Not verified: Unauthorized" });
    }
    console.log("check 3");

    // Find the user in the database
    console.log(decoded)
    const user = await userModel.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found: Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const authCaptain = async (req,res,next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    console.log(token)
    if(!token) {
        return res.status(401).json({message : "Unauthorized"})
    }
    console.log("check 1")
    const isBlacklisted = await blacklistTokenModel.findOne({token});
    if(isBlacklisted) {
        return res.status(401).json({message : "Unauthorized"})
    }
    console.log("check 2")
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    
    if(!decoded) {
        return res.status(401).json({message : "Unauthorized"})
    };
    console.log("check 3")
    const captain = await captainModel.findById(decoded.id).select("-password");
    if(!captain) {
        return res.status(401).json({message : "Unauthorized"})
    };
    console.log("check 4")
    req.captain = captain;
    next();


}
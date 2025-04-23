import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import blacklistTokenModel from "../models/blacklistToken.model.js";
import userModel from "../models/user.model.js";
import captainModel from "../models/captainModel.js";
dotenv.config();


export const authUser = async (req, res, next) => {
  try {
    console.log("AuthUser Middleware: Checking token...");

    let token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    console.log("Token received:", token);

    if (!token) {
      console.log("Token not found");
      return res.status(401).json({ message: "Token not found" });
    }

    // Check if the token is blacklisted
    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
      console.log("Token is blacklisted");
      return res.status(401).json({ message: "Blacklisted: Unauthorized" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      console.log("Token verification failed");
      return res.status(401).json({ message: "Not verified: Unauthorized" });
    }

    // Find the user in the database
    const user = await userModel.findById(decoded.id).select("-password");
    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "User not found: Unauthorized" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in authUser middleware:", error.message);
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
    console.log(isBlacklisted ,"blacklist")
    if(isBlacklisted) {
        return res.status(401).json({message : "Unauthorized"})
    }
    console.log("check 2")
    console.log("say hello to error")
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
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import blacklistTokenModel from "../models/blacklistToken.model.js";
import userModel from "../models/user.model.js";
dotenv.config();


export const authUser = async (req,res,next) => {
    const token = req.cookies?.token || req.headers.autherization?.split(" ")[1];
    console.log(token)
    if(!token) {
        return res.status(401).json({message : "Unauthorized"})
    }
    
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
    const user = await userModel.findById(decoded.id).select("-password");
    if(!user) {
        return res.status(401).json({message : "Unauthorized"})
    };
    req.user = user;
    next();


}
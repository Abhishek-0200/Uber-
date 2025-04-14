import { validationResult } from 'express-validator';
import User from '../models/user.model.js';
import { createUser } from '../Services/user.service.js';

export const registerController = async (req, res, next) => { 
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
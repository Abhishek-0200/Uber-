import express from 'express';
const router = express.Router();
import { registerController } from '../controller/user.controller.js';
import { body } from 'express-validator';


router.post('/register',
    [body("fullname.firstname").isLength({min : 3}).withMessage("First name must be at least 3 characters long"),
        body("email").isEmail().withMessage("Please enter a valid email"),
        body("password").isLength({min : 6}).withMessage("Password must be at least 6 characters long"),
    ]
    , registerController);



export default router;
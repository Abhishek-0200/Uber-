import express from 'express';
const router = express.Router();
import { logoutController, getProfileController, loginController, registerController } from '../controller/user.controller.js';
import { body } from 'express-validator';
import { authUser } from '../utils/middleware.js';



router.post('/register',
    [body("fullname.firstname").isLength({min : 3}).withMessage("First name must be at least 3 characters long"),
        body("email").isEmail().withMessage("Please enter a valid email"),
        body("password").isLength({min : 6}).withMessage("Password must be at least 6 characters long"),
    ]
    , registerController);

router.post("/login", [body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min : 6}).withMessage("Password must be at least 6 characters long")
], loginController);

router.get("/logout", authUser, logoutController);
router.get("/profile", authUser, getProfileController);

export default router;
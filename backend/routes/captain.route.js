import express from "express"
import { body } from "express-validator"
import { createCaptainController,loginCaptainController, logoutCaptainController, getCaptainProfileController } from "../controller/captain.controller.js"
import { authCaptain } from "../utils/middleware.js"
const router = express.Router()

router.post("/register", [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min : 6}).withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").notEmpty().withMessage("Please enter a valid color"),
    body("vehicle.type").notEmpty().withMessage("Please enter a valid type"),
    body("vehicle.plate").notEmpty().withMessage("Please enter a valid plate")
], createCaptainController)


router.post("/login",[
    body("email").isEmail().withMessage("not a valid email"),
    body("password").isLength({min: 6}).withMessage("password must be at least 6 characters long")
],loginCaptainController )


router.get("/profile", authCaptain, getCaptainProfileController);
router.get("/logout", authCaptain, logoutCaptainController);



export default router;
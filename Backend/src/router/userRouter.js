import express from "express";
import { LogIn, Signup } from "../controller/userController.js";

const userRouter = express.Router();

// Route for signup
userRouter.post("/signup", Signup);

// Route for login
userRouter.post("/login", LogIn);

export default userRouter;

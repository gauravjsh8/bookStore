import express from "express";
import { getUsers, login, signUp } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/create", signUp);
userRouter.post("/login", login);

export default userRouter;

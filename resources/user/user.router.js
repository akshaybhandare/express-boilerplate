import { Router } from "express";
import { getUser, postUser } from "../user/user.controller";


export const userRouter = Router();

userRouter.route("/").get(getUser).post(postUser)

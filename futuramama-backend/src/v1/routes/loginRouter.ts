import express from "express";
import { getLoginUser } from "../../controllers/loginController";
export const loginRouter = express.Router();

loginRouter.post("/", getLoginUser);

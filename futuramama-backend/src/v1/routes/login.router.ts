import express from "express";
import { getLoginUser } from "../../controllers/login.controller";
export const loginRouter = express.Router();

loginRouter.post("/", getLoginUser);

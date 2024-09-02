import express from "express";
import {
  createRegisterUser,
  getRegisterUser,
  updateRegisterUser,
} from "../../controllers/register.controller";
import { checkJwt } from "../../middleware/session.middleware";
export const registerRouter = express.Router();

registerRouter
  .get("/:id", checkJwt, getRegisterUser)
  .post("/", createRegisterUser)
  .put("/:id", checkJwt, updateRegisterUser);

import express from "express";
import {
  createRegisterUser,
  updateRegisterUser,
} from "../../controllers/registerController";
import { checkJwt } from "../../middleware/session.middleware";
export const registerRouter = express.Router();

registerRouter
  .post("/", createRegisterUser)
  .put("/:id", checkJwt, updateRegisterUser);

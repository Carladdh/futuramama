import express from "express";
import {
  createBabies,
  deleteBabies,
  getAllBabies,
  getOneBabies,
  updateBabies,
} from "../../controllers/baby.controller";
import { checkJwt } from "../../middleware/session.middleware";

export const babyRouter = express.Router();

babyRouter
  .get("/", checkJwt, getAllBabies)
  .get("/:id", checkJwt, getOneBabies)
  .post("/", createBabies)
  .put("/:id", checkJwt, updateBabies)
  .delete("/:id", checkJwt, deleteBabies);

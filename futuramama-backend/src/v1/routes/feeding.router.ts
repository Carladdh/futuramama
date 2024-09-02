import express from "express";
import {
  getAllFeeding,
  getOneFeeding,
  createFeeding,
  updateFeeding,
  deleteFeeding,
} from "../../controllers/feeding.controller";
import { checkJwt } from "../../middleware/session.middleware";

export const feedingRouter = express.Router();

feedingRouter
  .get("/", checkJwt, getAllFeeding)
  .get("/:id", checkJwt, getOneFeeding)
  .post("/", checkJwt, createFeeding)
  .put("/:id", checkJwt, updateFeeding)
  .delete("/:id", checkJwt, deleteFeeding);

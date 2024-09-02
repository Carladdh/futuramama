import express from "express";
import {
  getAllMommy,
  getOneMommy,
  createMommy,
  updateMommy,
  deleteMommy,
} from "../../controllers/mommy.controller";
import { checkJwt } from "../../middleware/session.middleware";

export const mommyRouter = express.Router();

mommyRouter
  .get("/", checkJwt, getAllMommy)
  .get("/:id", checkJwt, getOneMommy)
  .post("/", checkJwt, createMommy)
  .put("/:id", checkJwt, updateMommy)
  .delete("/:id", checkJwt, deleteMommy);

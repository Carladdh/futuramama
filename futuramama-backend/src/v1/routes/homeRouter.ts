import express from "express";
import {
  getAllHome,
  getOneHome,
  createHome,
  updateHome,
  deleteHome,
} from "../../controllers/homeController";
import { checkJwt } from "../../middleware/session.middleware";

export const homeRouter = express.Router();

homeRouter
  .get("/", checkJwt, getAllHome)
  .get("/:id", checkJwt, getOneHome)
  .post("/", checkJwt, createHome)
  .put("/:id", checkJwt, updateHome)
  .delete("/:id", checkJwt, deleteHome);

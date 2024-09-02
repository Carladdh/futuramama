import express from "express";

import { checkJwt } from "../../middleware/session.middleware";
import {
  getAllDiaryNotes,
  getOneDiaryNote,
  createDiaryNote,
  updateDiaryNote,
  deleteDiaryNote,
} from "../../controllers/diary.controller";

export const diaryRouter = express.Router();

diaryRouter
  .get("/:userId", checkJwt, getAllDiaryNotes)
  .get("/:id", checkJwt, getOneDiaryNote)
  .post("/", checkJwt, createDiaryNote)
  .put("/:id", checkJwt, updateDiaryNote)
  .delete("/:id", checkJwt, deleteDiaryNote);

import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handler";
import {
  createDiaryNoteService,
  deleteDiaryNoteService,
  getAllDiaryNotesService,
  getOneDiaryNoteService,
  updateDiaryNoteService,
} from "../services/diary.service";

export const getAllDiaryNotes = async (req: Request, res: Response) => {
  try {
    const data = await getAllDiaryNotesService(req.params.userId);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const getOneDiaryNote = async (req: Request, res: Response) => {
  try {
    const data = await getOneDiaryNoteService(req.params.id);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const createDiaryNote = async (req: Request, res: Response) => {
  try {
    const data = await createDiaryNoteService(req.body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const updateDiaryNote = async (req: Request, res: Response) => {
  try {
    const data = await updateDiaryNoteService(req.params.id, req.body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const deleteDiaryNote = async (req: Request, res: Response) => {
  try {
    const data = await deleteDiaryNoteService(req.params.id);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};

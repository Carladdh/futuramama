import {
  createHomeService,
  deleteHomeService,
  getAllHomeService,
  getOneHomeService,
  updateHomeService,
} from "../services/homeService";
import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handler";

export const getAllHome = async (_req: Request, res: Response) => {
  try {
    const data = await getAllHomeService();
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const getOneHome = async (req: Request, res: Response) => {
  try {
    const data = await getOneHomeService(req.params.id);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const createHome = async (req: Request, res: Response) => {
  try {
    const data = await createHomeService(req.body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const updateHome = async (req: Request, res: Response) => {
  try {
    const data = await updateHomeService(req.params.id, req.body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const deleteHome = async (req: Request, res: Response) => {
  try {
    const data = await deleteHomeService(req.params.id);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};

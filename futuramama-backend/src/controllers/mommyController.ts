import {
  createMommyService,
  deleteMommyService,
  getAllMommyService,
  getOneMommyService,
  updateMommyService,
} from "../services/mommyService";
import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handler";

export const getAllMommy = async (_req: Request, res: Response) => {
  try {
    const data = await getAllMommyService();
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const getOneMommy = async (req: Request, res: Response) => {
  try {
    const data = await getOneMommyService(req.params.id);
    console.log(data);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const createMommy = async (req: Request, res: Response) => {
  try {
    const data = await createMommyService(req.body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const updateMommy = async (req: Request, res: Response) => {
  try {
    const data = await updateMommyService(req.params.id, req.body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const deleteMommy = async (req: Request, res: Response) => {
  try {
    const data = await deleteMommyService(req.params.id);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};

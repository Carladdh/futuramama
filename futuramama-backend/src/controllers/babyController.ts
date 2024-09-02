import {
  createBabiesService,
  deleteBabiesService,
  getAllBabiesService,
  getOneBabiesService,
  updateBabiesService,
} from "../services/babyService";
import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handler";

export const getAllBabies = async (_req: Request, res: Response) => {
  try {
    const data = await getAllBabiesService();
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const getOneBabies = async (req: Request, res: Response) => {
  try {
    const data = await getOneBabiesService(req.params.id);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const createBabies = async (req: Request, res: Response) => {
  try {
    const data = await createBabiesService(req.body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const updateBabies = async (req: Request, res: Response) => {
  try {
    const data = await updateBabiesService(req.params.id, req.body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const deleteBabies = async (req: Request, res: Response) => {
  try {
    const data = await deleteBabiesService(req.params.id);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};

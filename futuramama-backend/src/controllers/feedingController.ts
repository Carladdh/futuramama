import {
  createFeedingService,
  deleteFeedingService,
  getAllFeedingService,
  getOneFeedingService,
  updateFeedingService,
} from "../services/feedingService";
import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handler";

export const getAllFeeding = async (_req: Request, res: Response) => {
  try {
    const data = await getAllFeedingService();
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const getOneFeeding = async (req: Request, res: Response) => {
  try {
    const data = await getOneFeedingService(req.params.id);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const createFeeding = async (req: Request, res: Response) => {
  try {
    const data = await createFeedingService(req.body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};

export const updateFeeding = async (req: Request, res: Response) => {
  try {
    const data = await updateFeedingService(req.params.id, req.body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};
export const deleteFeeding = async (req: Request, res: Response) => {
  try {
    const data = await deleteFeedingService(req.params.id);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};

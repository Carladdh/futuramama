import { Request, Response } from "express";
import {
  createRegisterUserService,
  updateRegisterUserService,
} from "../services/registerService";
import { handleHttpError } from "../utils/error.handler";
export const createRegisterUser = async (req: Request, res: Response) => {
  try {
    const data = await createRegisterUserService(req.body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};

export const updateRegisterUser = async (req: Request, res: Response) => {
  try {
    const data = await updateRegisterUserService(req.params.id, req.body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};

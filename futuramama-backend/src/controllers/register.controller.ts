import { Request, Response } from "express";
import {
  createRegisterUserService,
  getRegisterUserService,
  updateRegisterUserService,
} from "../services/register.service";
import { handleHttpError } from "../utils/error.handler";
import { User } from "../models/user.interface";

export const getRegisterUser = async (req: Request, res: Response) => {
  try {
    const data = await getRegisterUserService(req.params.id);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};

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
    const { name, email, surname1, surname2, prevDate } = data as User;
    res.send({ name, email, surname1, surname2, prevDate });
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};

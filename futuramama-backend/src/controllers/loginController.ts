import { Request, Response } from "express";
import { getLoginUserDataService } from "../services/loginService";
import { handleHttpError } from "../utils/error.handler";
export const getLoginUser = async (req: Request, res: Response) => {
  try {
    const data = await getLoginUserDataService(req.body);
    if (!data) {
      res.send("No hay usuario");
    }
    res.send(data);
  } catch (error) {
    handleHttpError(res, "error", error);
  }
};

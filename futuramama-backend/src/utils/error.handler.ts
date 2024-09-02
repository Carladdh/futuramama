import { Response } from "express";

export const handleHttpError = (
  res: Response,
  error: string,
  errorRaw?: any
) => {
  console.log(errorRaw);
  res.status(500);
  res.send({ error });
};

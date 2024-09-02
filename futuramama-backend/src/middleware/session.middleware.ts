import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.hander";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return res.status(401).json({ error: "Authorization header missing" });
    }

    const jwt = authorizationHeader.split(" ").pop();

    if (!jwt) {
      return res
        .status(401)
        .json({ error: "JWT missing from authorization header" });
    }

    const isUser = verifyToken(jwt as string);

    if (!isUser) {
      return res.status(401).json({ error: "Invalid JWT" });
    }

    // Si el JWT es válido, continuar con el siguiente middleware o ruta
    next();
  } catch (e) {
    console.error("Error in checkJwt middleware", e);
    return res.status(400).json({ error: "Invalid session" });
  }
};

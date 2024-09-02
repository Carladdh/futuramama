import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const generateToken = (id: string) => {
  return sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
};

export const verifyToken = (jwt: string) => {
  return verify(jwt, JWT_SECRET);
};

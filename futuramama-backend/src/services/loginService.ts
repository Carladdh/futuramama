import { UserModel } from "../database/schemas/user.schema";
import { Login } from "../models/login.interface";
import { verified } from "../utils/bcrypt.handler";
import { generateToken } from "../utils/jwt.hander";

export const getLoginUserDataService = async ({ email, password }: Login) => {
  const userExist = await UserModel.findOne({ email });
  if (!userExist) {
    return "No existe el usuario";
  }
  const passwordHash = userExist.password;
  const isPasswordCorrect = await verified(password, passwordHash);
  if (!isPasswordCorrect) {
    return "Contraseña incorrecta";
  }
  const token = generateToken(userExist.email);
  return token;
};

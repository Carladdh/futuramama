import { UserModel } from "../database/schemas/user.schema";
import { User } from "../models/user.interface";
import { encrypt } from "../utils/bcrypt.handler";

export const getRegisterUserService = async (_id: string) => {
  return await UserModel.findOne({ _id });
};

export const createRegisterUserService = async (user: User) => {
  const checkUserExist = await UserModel.findOne({ email: user.email });
  if (checkUserExist) {
    return "Existe";
  }
  const passHash = await encrypt(user.password);
  const userToCreate = { ...user, password: passHash };
  return await UserModel.create(userToCreate);
};

export const updateRegisterUserService = async (id: string, user: User) => {
  const checkUserExist = await UserModel.findOne({ _id: id });
  if (!checkUserExist) {
    return "No existe";
  }
  console.log(user);
  const { name, surname1, surname2 } = user;
  const userToUpdate = { ...checkUserExist, name, surname1, surname2 };
  return await UserModel.findOneAndUpdate({ _id: id }, userToUpdate, {
    new: true,
  });
};

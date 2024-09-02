import { model, Schema } from "mongoose";
import { User } from "../../models/user.interface";

const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname1: {
      type: String,
      required: true,
    },
    surname2: {
      type: String,
      required: true,
    },
    prevDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const UserModel = model("User", UserSchema);

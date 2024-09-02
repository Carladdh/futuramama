import { Login } from "./login.interface";

export interface User extends Login {
  _id?: string;
  name: string;
  surname1: string;
  surname2: string;
  prevDate: string;
}

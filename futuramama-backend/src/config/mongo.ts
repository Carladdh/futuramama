import "dotenv/config";
import mongoose, { connect } from "mongoose";

export const dbConnect = async () => {
  mongoose.set("strictQuery", false);
  const DB_URI = <string>process.env.DB_URI;
  await connect(DB_URI);
};

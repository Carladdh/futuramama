import { model, Schema } from "mongoose";
import { News } from "../../models/news.interface";

const MommySchema = new Schema<News>(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
    },
    image: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const MommyModel = model("Mommy", MommySchema);

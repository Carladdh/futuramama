import { model, Schema } from "mongoose";
import { News } from "../../models/news.interface";

const HomeSchema = new Schema<News>(
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
    externalLink: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const HomeModel = model("Home", HomeSchema);

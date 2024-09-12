import { model, Schema } from "mongoose";
import { News } from "../../models/news.interface";

const BabySchema = new Schema<News>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
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

export const BabyModel = model("Babies", BabySchema);

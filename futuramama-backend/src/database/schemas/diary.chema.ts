import { model, Schema } from "mongoose";
import { Diary } from "../../models/diary.interface";

const DiarySchema = new Schema<Diary>(
  {
    text: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const DiaryModel = model("Diary", DiarySchema);

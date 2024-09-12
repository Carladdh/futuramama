import { BabyModel } from "../database/schemas/baby.schema";
import { News } from "../models/news.interface";

export const getAllBabiesService = async () => {
  let news = await BabyModel.find({});
  if (news) {
    news = news.map((el) => {
      if (el.createdAt) {
        el.date = new Date(el.createdAt).toLocaleDateString();
      }
      return el;
    });
  }
  return news;
};
export const getOneBabiesService = async (_id: string) => {
  return await BabyModel.find({ _id });
};
export const createBabiesService = async (baby: News) => {
  return await BabyModel.create(baby);
};
export const updateBabiesService = async (_id: string, baby: News) => {
  return await BabyModel.findOneAndUpdate({ _id }, baby, {
    new: true,
  });
};
export const deleteBabiesService = async (_id: string) => {
  return await BabyModel.deleteOne({ _id });
};

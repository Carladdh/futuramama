import { MommyModel } from "../database/schemas/mommy.schema";
import { News } from "../models/news.interface";

export const getAllMommyService = async () => {
  let news = await MommyModel.find({});
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
export const getOneMommyService = async (_id: string) => {
  return await MommyModel.find({ _id });
};
export const createMommyService = async (mommy: News) => {
  return await MommyModel.create(mommy);
};
export const updateMommyService = async (_id: string, mommy: News) => {
  return await MommyModel.findOneAndUpdate({ _id }, mommy, { new: true });
};

export const deleteMommyService = async (_id: string) => {
  return await MommyModel.deleteOne({ _id });
};

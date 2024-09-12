import { HomeModel } from "../database/schemas/home.schema";
import { News } from "../models/news.interface";

export const getAllHomeService = async () => {
  let news = await HomeModel.find({});
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
export const getOneHomeService = async (_id: string) => {
  return await HomeModel.find({ _id });
};
export const createHomeService = async (home: News) => {
  return await HomeModel.create(home);
};
export const updateHomeService = async (_id: string, home: News) => {
  return await HomeModel.findOneAndUpdate({ _id }, home, {
    new: true,
  });
};
export const deleteHomeService = async (_id: string) => {
  return await HomeModel.deleteOne({ _id });
};

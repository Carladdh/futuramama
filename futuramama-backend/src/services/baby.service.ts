import { BabyModel } from "../database/schemas/baby.schema";
import { News } from "../models/news.interface";

export const getAllBabiesService = async () => {
  return await BabyModel.find({});
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

import { FeedingModel } from "../database/schemas/feeding.schema";
import { News } from "../models/news.interface";

export const getAllFeedingService = async () => {
  let news = await FeedingModel.find({});
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
export const getOneFeedingService = async (_id: string) => {
  return await FeedingModel.find({ _id });
};
export const createFeedingService = async (feeding: News) => {
  return await FeedingModel.create(feeding);
};
export const updateFeedingService = async (_id: string, feeding: News) => {
  return await FeedingModel.findOneAndUpdate(
    {
      _id,
    },
    feeding,
    { new: true }
  );
};

export const deleteFeedingService = async (_id: string) => {
  return await FeedingModel.deleteOne({ _id });
};

import { DiaryModel } from "../database/schemas/diary.chema";
import { Diary } from "../models/diary.interface";

export const getAllDiaryNotesService = async (userId: string) => {
  let notes = await DiaryModel.find({ userId });
  if (notes) {
    notes = notes.map((note) => {
      if (note.createdAt) {
        note.date = new Date(note.createdAt).toLocaleDateString();
      }
      return note;
    });
    return notes;
  }
};
export const getOneDiaryNoteService = async (_id: string) => {
  return await DiaryModel.find({ _id });
};
export const createDiaryNoteService = async (diaryNote: Diary) => {
  return await DiaryModel.create(diaryNote);
};
export const updateDiaryNoteService = async (_id: string, diaryNote: Diary) => {
  return await DiaryModel.findOneAndUpdate({ _id }, diaryNote, {
    new: true,
  });
};
export const deleteDiaryNoteService = async (_id: string) => {
  return await DiaryModel.deleteOne({ _id });
};

import { createContext, PropsWithChildren, useEffect } from "react";
import React from "react";
import { Diary } from "../../core/models/diary.interface";
import { AxiosGet, AxiosPost } from "../../core/api/axios.service";

interface DiaryContext {
  diaryNoteList: Diary[] | null;
  newDiaryNote: (diary: Diary) => void;
}

export const DiaryContext = createContext<DiaryContext>({} as DiaryContext);

export const DiaryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [diaryNoteList, setDiaryNoteList] = React.useState<Diary[] | null>(
    null
  );
  const id = localStorage.getItem("id");

  const apiServiceGet = async () => {
    await AxiosGet("/diary/" + id)
      .then((res) => {
        setDiaryNoteList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const apiServicePost = async (diary: Diary) => {
    await AxiosPost("/diary", { ...diary, userId: id })
      .then(() => {
        apiServiceGet();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const newDiaryNote = async (diary: Diary) => {
    await apiServicePost(diary);
  };

  useEffect(() => {
    apiServiceGet();
  }, []);

  return (
    <DiaryContext.Provider
      value={{
        diaryNoteList,
        newDiaryNote,
      }}
    >
      {children}
    </DiaryContext.Provider>
  );
};

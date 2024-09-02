import { useState } from "react";
import { Diary } from "../../core/models/diary.interface";
import DiaryItem from "./components/diaryItem";

interface Props {
  diaryNoteList: Diary[] | null;
  newDiaryNote: (diary: Diary) => void;
}

const DiaryComponent: React.FC<Props> = ({ diaryNoteList, newDiaryNote }) => {
  const [text, setText] = useState("");

  const handleWriteText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    newDiaryNote({ text });
  };
  return (
    <>
      <div>
        <form>
          <textarea placeholder="Diario" onChange={handleWriteText} />
          <div>
            <button onClick={handleSubmit}>Añadir</button>
          </div>
        </form>
      </div>
      {diaryNoteList?.length ? (
        diaryNoteList.map((note) => (
          <DiaryItem diaryNote={note} key={note._id} />
        ))
      ) : (
        <div>No hay entradas al diario</div>
      )}
    </>
  );
};

export default DiaryComponent;

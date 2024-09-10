import { useState } from "react";
import { Diary } from "../../core/models/diary.interface";
import DiaryItem from "./components/diaryItem";
import "./diary.component.scss";

interface Props {
  diaryNoteList: Diary[] | null;
  newDiaryNote: (diary: Diary) => void;
  deleteDiaryNote: (id: string) => void;
}

const DiaryComponent: React.FC<Props> = ({
  diaryNoteList,
  newDiaryNote,
  deleteDiaryNote,
}) => {
  const [text, setText] = useState("");

  const handleWriteText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    newDiaryNote({ text });
    setText("");
  };

  return (
    <>
      <div className="diary-container">
        <form className="diary-container__form">
          <textarea
            value={text}
            className="diary-container__form__textarea"
            placeholder="Diario"
            onChange={handleWriteText}
          />
          <div className="diary-container__form__button-container">
            <button
              className="diary-container__form__button-container__button"
              onClick={handleSubmit}
            >
              Añadir
            </button>
          </div>
        </form>
      </div>
      {diaryNoteList?.length ? (
        diaryNoteList.map((note) => (
          <DiaryItem
            diaryNote={note}
            key={note._id}
            deleteDiaryNote={deleteDiaryNote}
          />
        ))
      ) : (
        <div>No hay entradas al diario</div>
      )}
    </>
  );
};

export default DiaryComponent;

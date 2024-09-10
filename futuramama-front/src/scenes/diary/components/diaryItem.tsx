import { Diary } from "../../../core/models/diary.interface";
import "./diaryItem.scss";
interface Props {
  diaryNote: Diary;
  deleteDiaryNote: (id: string) => void;
}

const DiaryItem: React.FC<Props> = ({ diaryNote, deleteDiaryNote }) => {
  return (
    diaryNote && (
      <div className="diary-note-container">
        <p className="diary-note-container__text">{diaryNote?.text}</p>
        <div className="diary-note-container__tools">
          <p className="diary-note-container__tools__date">{diaryNote?.date}</p>
          <button
            className="diary-note-container__tools__button"
            onClick={() => deleteDiaryNote(diaryNote._id || "")}
          >
            Borrar
          </button>
        </div>
      </div>
    )
  );
};

export default DiaryItem;

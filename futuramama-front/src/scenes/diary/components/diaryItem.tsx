import { Diary } from "../../../core/models/diary.interface";
import "./diaryItem.scss";
interface Props {
  diaryNote: Diary;
}

const DiaryItem: React.FC<Props> = ({ diaryNote }) => {
  return (
    diaryNote && (
      <div className="diary-note">
        <p>{diaryNote?.text}</p>
        <p>{diaryNote?.date}</p>
      </div>
    )
  );
};

export default DiaryItem;

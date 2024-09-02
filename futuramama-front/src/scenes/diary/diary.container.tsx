import { useContext } from "react";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import { DiaryContext } from "./diary.context";
import DiaryComponent from "./diary.component";

const DiaryContainer: React.FC = () => {
  const { diaryNoteList, newDiaryNote } = useContext(DiaryContext);
  return (
    <MainLayout>
      <h4>Diario</h4>
      <DiaryComponent
        diaryNoteList={diaryNoteList}
        newDiaryNote={newDiaryNote}
      />
    </MainLayout>
  );
};

export default DiaryContainer;

import { useContext } from "react";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import { DiaryContext } from "./diary.context";
import DiaryComponent from "./diary.component";

const DiaryContainer: React.FC = () => {
  const { diaryNoteList, newDiaryNote, deleteDiaryNote } =
    useContext(DiaryContext);
  return (
    <MainLayout>
      <h2>Tu día a día como Mamá</h2>
      <DiaryComponent
        diaryNoteList={diaryNoteList}
        newDiaryNote={newDiaryNote}
        deleteDiaryNote={deleteDiaryNote}
      />
    </MainLayout>
  );
};

export default DiaryContainer;

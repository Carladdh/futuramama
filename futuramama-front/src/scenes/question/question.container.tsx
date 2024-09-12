import MainLayout from "../../layout/components/main-layout/mainLayout";
import QuestionComponent from "./question.component";

const QuestionContainer: React.FC = () => {
  return (
    <MainLayout>
      <h2>Pregunta a nuestra experta!!</h2>
      <QuestionComponent />
    </MainLayout>
  );
};

export default QuestionContainer;

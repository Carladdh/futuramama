import { useContext } from "react";
import DiarioComponent from "./diario.component";
import { DiarioContext } from "./diario.context";
import MainLayout from "../../layout/components/main-layout/mainLayout";

const DiarioContainer: React.FC = () => {
  const { newsList } = useContext(DiarioContext);
  return (
    <MainLayout>
      <h4>Noticias</h4>
      <DiarioComponent />
    </MainLayout>
  );
};

export default DiarioContainer;

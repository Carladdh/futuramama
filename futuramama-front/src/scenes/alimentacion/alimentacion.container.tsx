import { useContext } from "react";
import AlimentacionComponent from "./alimentacion.component";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import { AlimentacionContext } from "./alimentacion.context";

const AlimentacionContainer: React.FC = () => {
  const { newsList } = useContext(AlimentacionContext);

  return (
    <MainLayout>
      <h4>Noticias</h4>
      <AlimentacionComponent list={newsList} />
    </MainLayout>
  );
};

export default AlimentacionContainer;

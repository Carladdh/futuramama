import { useContext } from "react";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import MamaComponent from "./mama.component";
import { MamaContext } from "./mama.context";

const MamaContainer: React.FC = () => {
  const { newsList } = useContext(MamaContext);

  return (
    <MainLayout>
      <h4>Noticias</h4>
      <MamaComponent newsList={newsList} />
    </MainLayout>
  );
};

export default MamaContainer;

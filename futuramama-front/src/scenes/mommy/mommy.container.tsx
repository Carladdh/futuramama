import { useContext } from "react";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import MamaComponent from "./mommy.component";
import { MommyContext } from "./mommy.context";

const MommyContainer: React.FC = () => {
  const { newsList } = useContext(MommyContext);

  return (
    <MainLayout>
      <h2>Noticias para la Mamá</h2>
      <MamaComponent newsList={newsList} />
    </MainLayout>
  );
};

export default MommyContainer;

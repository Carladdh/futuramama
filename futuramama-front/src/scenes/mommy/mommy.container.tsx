import { useContext } from "react";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import MamaComponent from "./mommy.component";
import { MommyContext } from "./mommy.context";

const MommyContainer: React.FC = () => {
  const { newsList } = useContext(MommyContext);

  return (
    <MainLayout>
      <h4>Noticias</h4>
      <MamaComponent newsList={newsList} />
    </MainLayout>
  );
};

export default MommyContainer;

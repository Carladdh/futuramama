import { useContext } from "react";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import { BabyContext } from "./baby.context";
import BabyComponent from "./baby.component";

const BabyContainer: React.FC = () => {
  const { newsList } = useContext(BabyContext);

  return (
    <MainLayout>
      <h4>Noticias</h4>
      <BabyComponent newsList={newsList} />
    </MainLayout>
  );
};

export default BabyContainer;

import { useContext } from "react";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import { BabyContext } from "./baby.context";
import BabyComponent from "./baby.component";

const BabyContainer: React.FC = () => {
  const { newsList } = useContext(BabyContext);

  return (
    <MainLayout>
      <h2>Cosas interesante sobre tu Bebé</h2>
      <BabyComponent newsList={newsList} />
    </MainLayout>
  );
};

export default BabyContainer;

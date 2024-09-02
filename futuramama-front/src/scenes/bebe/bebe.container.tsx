import { useContext } from "react";
import BebeComponent from "./bebe.component";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import { BebeContext } from "./bebe.context";

const BebeContainer: React.FC = () => {
  const { newsList } = useContext(BebeContext);

  return (
    <MainLayout>
      <h4>Noticias</h4>
      <BebeComponent newsList={newsList} />
    </MainLayout>
  );
};

export default BebeContainer;

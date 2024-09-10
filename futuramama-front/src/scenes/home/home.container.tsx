import { useContext } from "react";

import HomeComponent from "./home.component";

import MainLayout from "../../layout/components/main-layout/mainLayout";
import { HomeContext } from "./home.context";

const HomeContainer: React.FC = () => {
  const { newsList } = useContext(HomeContext);

  return (
    <MainLayout>
      <h2>Hola!! Aquí tienes cosas interesantes!!!</h2>
      <HomeComponent newsList={newsList} />
    </MainLayout>
  );
};

export default HomeContainer;

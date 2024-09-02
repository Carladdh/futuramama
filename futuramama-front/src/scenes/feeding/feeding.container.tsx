import { useContext } from "react";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import FeedingComponent from "./feeding.component";
import { FeedingContext } from "./feeding.context";

const FeedingContainer: React.FC = () => {
  const { newsList } = useContext(FeedingContext);

  return (
    <MainLayout>
      <h4>Noticias</h4>
      <FeedingComponent list={newsList} />
    </MainLayout>
  );
};

export default FeedingContainer;

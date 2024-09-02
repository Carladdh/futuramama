import { News } from "../../core/models/news.interface";
import NewsItem from "../../components/newsItems/newsItem";

interface Props {
  newsList: News[] | null;
}

const HomeComponent: React.FC<Props> = ({ newsList }) => {
  return (
    <>
      {newsList?.length ? (
        newsList.map((news) => <NewsItem news={news} key={news.id} />)
      ) : (
        <div>No hay noticias</div>
      )}
    </>
  );
};

export default HomeComponent;

import NewsItem from "../../components/newsItems/newsItem";
import { News } from "../../core/models/news.interface";

interface Props {
  newsList: News[] | null;
}
const MamaComponent: React.FC<Props> = ({ newsList }) => {
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

export default MamaComponent;

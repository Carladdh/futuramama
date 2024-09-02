import NewsItem from "../../components/newsItems/newsItem";
import { News } from "../../core/models/news.interface";
interface Props {
  newsList: News[] | null;
}
const BebeComponent: React.FC<Props> = ({ newsList }) => {
  return (
    <>
      {newsList?.length ? (
        newsList.map((news) => <NewsItem news={news} key={news.title} />)
      ) : (
        <div>No hay noticias</div>
      )}
    </>
  );
};

export default BebeComponent;

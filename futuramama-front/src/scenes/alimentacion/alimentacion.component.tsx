import NewsItem from "../../components/newsItems/newsItem";
import { News } from "../../core/models/news.interface";

interface Props {
  list: News[] | null;
}

const AlimentacionComponent: React.FC<Props> = ({ list }) => {
  return (
    <>
      {list?.length ? (
        list.map((news) => <NewsItem news={news} key={news.id} />)
      ) : (
        <div>No hay noticias</div>
      )}
    </>
  );
};

export default AlimentacionComponent;

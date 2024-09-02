import { News } from "../../core/models/news.interface";
import "./newsItem.scss";

interface Props {
  news: News;
}

const NewsItem: React.FC<Props> = ({ news }) => {
  return (
    news && (
      <div className="news-card">
        <h4>{news.title}</h4>
        <p>{news.description}</p>
        <p>{news?.date}</p>
      </div>
    )
  );
};

export default NewsItem;

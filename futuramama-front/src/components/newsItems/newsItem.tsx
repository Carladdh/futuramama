import { News } from "../../core/models/news.interface";
import "./newsItem.scss";

interface Props {
  news: News;
}

const NewsItem: React.FC<Props> = ({ news }) => {
  return (
    news && (
      <div className="news-card">
        <h3>{news.title}</h3>
        <p className="news-card__description">{news.description}</p>
        <div className="news-card__footer">
          {news?.externalLink && (
            <a
              className="news-card__footer__read-more"
              href={news?.externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer más
            </a>
          )}
          <p className="news-card__footer__date">{news?.date}</p>
        </div>
      </div>
    )
  );
};

export default NewsItem;

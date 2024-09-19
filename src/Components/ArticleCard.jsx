import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  let source = article.article_img_url;
  let path = `/articles/${article.article_id}`;

  return (
    <li className="article-card">
      <div className="image-container">
        <Link to={path}>
          <img src={source} className="image article-link" />
        </Link>
      </div>
      <Link to={path}>
      <div className="article-info">
        <h2>{article.title}</h2>
      </div>
      
        <button className="hover-info">Click here for more info</button>
      </Link>
    </li>
  );
}
export default ArticleCard;

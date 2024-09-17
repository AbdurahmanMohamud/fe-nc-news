function ArticleCard({ article }) {
  let source = article.article_img_url;
  let path = `/${article.article_id}`;

  return (
    <li className="article-card">
      <div className="image-container">
        <a href={path}>
          <img src={source} className="image article-link" />
        </a>
      </div>
      <div className="article-info">
        <h2>{article.title}</h2>
      </div>
      <a href={path}>
        <button className="hover-info">Click here for more info</button>
      </a>
    </li>
  );
}
export default ArticleCard;

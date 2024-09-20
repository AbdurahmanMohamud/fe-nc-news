import { getAllArticles } from "../apiCalls";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";

function ArticleContainer({ articles, setArticles }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getAllArticles()
      .then((data) => {
        setIsLoading(false);
        setIsError(false);
        setArticles(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching article details.</p>;

  return (
    <ul className="articles-ul">
      <div className="container">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </div>
    </ul>
  );
}

export default ArticleContainer;

import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";

function ArticleContainer({ search, setSearch, articles, setArticles }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const url = new URL("https://nc-news-y5oc.onrender.com/api/articles");
    // check print screen for explanation
    url.searchParams.set("search", search);

    fetch(url.toString())
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setIsError(false);
        // if left handside is null or undifined, use the right handside

        setArticles(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [search]);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching article details.</p>;
  console.log(articles);
  return (
    <ul>
      <div className="container">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </div>
    </ul>
  );
}

export default ArticleContainer;

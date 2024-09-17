import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Article({ articles }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetch(`https://nc-news-y5oc.onrender.com/api/articles/${article_id}`)
      .then((article) => {
        return article.json();
      })
      .then((article) => {
        setIsLoading(false);
        setIsError(false);
        setArticle(article[0]);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [article_id]);

  useEffect(() => {
    fetch(
      `https://nc-news-y5oc.onrender.com/api/articles/${article_id}/comments`
    )
      .then((comments) => {
        return comments.json();
      })
      .then((comments) => {
        setComments(comments);
      });
  }, []);

  useEffect(() => {
    let totalVotes = 0;
    comments.map((comment) => {
      return (totalVotes += comment.votes);
    });
    setVotes(totalVotes);
  });
  let count = 0;
  return (
    <main className="article-content">
      <section className="article-image-div">
        <img src={article.article_img_url} alt="Article-image" />
      </section>

      <section className="article-text">
        <h2>{article.title}</h2>
        <p>
          <b>Author:</b> {article.author}
        </p>
        <p>
          <b>Topic:</b> {article.topic}
        </p>
        <p>{article.body}</p>
        <br />
        <br />
        <div className="vote">
          <button>Upvote</button>
          <button>Downvote</button>
          <h3>Votes: {votes}</h3>
        </div>
      </section>

      <section className="comment-section">
        <div>
          <h3>Comments:</h3>
          {comments.map(
            (comment) => (
              (count += 1),
              (
                <p key={comment.comment_id}>
                  {count}:{comment.body}
                </p>
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}
export default Article;

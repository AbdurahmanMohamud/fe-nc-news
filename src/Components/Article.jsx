import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  downvote,
  getArticleById,
  getCommentsById,
  upvote,
  postCommentById,
} from "../apiCalls";

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentToSubmit, setCommentToSubmit] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getArticleById(article_id)
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
    getCommentsById(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  function incrLike() {
    upvote(article_id).then(({ data }) => {
      setArticle(data);
    });
  }

  function decrLike() {
    downvote(article_id).then(({ data }) => {
      setArticle(data);
    });
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching article details.</p>;

  function submitComment(e) {
    e.preventDefault();
    const commentObject = { username: "grumpy19", body: commentToSubmit };
    postCommentById(article_id, commentObject).then((addedComment) => {
      console.log(addedComment)
      setComments([addedComment, ...comments]);
      setCommentToSubmit("");
    });
  }

  return (
    <main className="article-content">
      <section className="article-image-div">
        <img
          className="solo-image"
          src={article.article_img_url}
          alt="Article-image"
        />
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
          <button onClick={incrLike}>Upvote</button>
          <button onClick={decrLike}>Downvote</button>
          <h3>Votes:{article.votes}</h3>
        </div>
        <div>
          <h3>Add a Comment:</h3>
          <textarea
            id="comment-area"
            value={commentToSubmit}
            onChange={(e) => setCommentToSubmit(e.target.value)}
            placeholder="Write a comment..."
          />
          <button className="comment-button" onClick={submitComment}>
            Submit
          </button>
        </div>
      </section>

      <section className="comment-section">
        <div>
          <h3>Comments:</h3>
          {comments.length > 0 ? (
            comments.map((individualComment) => (
              <p key={individualComment.comment_id} className="comment">
                -:{individualComment.body}
                <br />
                <b>Votes:</b>
                {individualComment.votes}
              </p>
            ))
          ) : (
            <p>No comments yet...</p>
          )}
        </div>
      </section>
    </main>
  );
}
export default Article;

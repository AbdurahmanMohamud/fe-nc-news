import axios from "axios";

const url = axios.create({
  baseURL: "https://nc-news-y5oc.onrender.com/api",
});

export function getAllArticles() {
  return url.get("/articles").then(({ data }) => {
    return data;
  });
}

export function getArticleById(article_id) {
  return url.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
}

export function getCommentsById(article_id) {
  return url.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
}

export function upvote(article_id) {
  return url.patch(`/articles/${article_id}`, { inc_votes: 1 }).then((data) => {
    return data;
  });
}

export function downvote(article_id) {
  return url
    .patch(`/articles/${article_id}`, { inc_votes: -1 })
    .then((data) => {
      return data;
    });
}

export function postCommentById(article_id, commentObject) {
  return url
    .post(`/articles/${article_id}/comments`, commentObject)
    .then(({ body }) => {
      return body;
    });
}

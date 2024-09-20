import { useState } from "react";
import Header from "./Components/Header";
import ArticleContainer from "./Components/ArticleContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./Components/Article";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleContainer articles={articles} setArticles={setArticles} />
          }
        />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

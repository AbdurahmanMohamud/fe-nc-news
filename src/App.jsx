import { useState } from "react";
import Header from "./Components/Header";
import ArticleContainer from "./Components/ArticleContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./Components/Article";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  return (
    <BrowserRouter>
      <Header
        articles={articles}
        setArticles={setArticles}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleContainer
              search={search}
              setSearch={setSearch}
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route path="/:article_id" element={<Article articles={articles} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

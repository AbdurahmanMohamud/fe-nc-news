import SearchBar from "./SearchBar";
import Navigator from "./Navigator";

function Header({ search, setSearch, articles, setArticles }) {
  return (
    <header>
      <a href="/">
        <img className="header-image" src="articles.webp" alt="logo" />
      </a>
      <div className="header-centre">
        <SearchBar setSearch={setSearch} />
        <Navigator
          className="navigator"
          articles={articles}
          setArticles={setArticles}
        />
      </div>
    </header>
  );
}
export default Header;

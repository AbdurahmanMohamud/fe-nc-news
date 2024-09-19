import SearchBar from "./SearchBar";
import Navigator from "./Navigator";
import { Link } from "react-router-dom";

function Header({ search, setSearch, articles, setArticles }) {
  return (
    <header>
      <Link to="/">
        <img className="header-image" src="../../articles.webp" alt="logo" />
      </Link>
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

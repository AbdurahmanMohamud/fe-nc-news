import SearchBar from "./SearchBar";
import Navigator from "./Navigator";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="header-image" src="../../articles.webp" alt="logo" />
      </Link>
      <div className="header-centre">
        <SearchBar  />
        <Navigator
          className="navigator"
         
        />
      </div>
    </header>
  );
}
export default Header;

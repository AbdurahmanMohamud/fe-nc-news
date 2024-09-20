function SearchBar() {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="searchbar">
      <form className="form" action="/action_page.php" onSubmit={onSubmit}>
        <input type="text" placeholder="Search keyword..." name="search" />
        <button className="searchbutton" type="submit">
          🔎
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

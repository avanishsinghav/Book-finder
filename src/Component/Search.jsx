import React from "react";
import "../style/Search.css";
import { FaSearch } from "react-icons/fa";

const Search = ({ query, setQuery, fetchBooks }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks(query);
  };
  return (
    <div className="container">
      <h1>📚 Book Finder</h1>

      {/* Search Bar */}
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search By Book Title..."
            />
          </div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;

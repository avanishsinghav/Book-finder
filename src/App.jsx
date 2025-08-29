import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Component/card/Card";
import Search from "./Component/Search";
import Error from "./Component/Error";
import Loading from "./Component/Loading";
import Cards from "./Component/card/Cards";
import Sorting from "./Component/Sorting";

export default function BookFinder() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sort, setSort] = useState("");

  const fetchBooks = async (searchQuery = query) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${searchQuery}`
      );
      const data = await res.json();
      setBooks(data.docs.slice(0, 24));
    } catch (err) {
      console.log(err);
      setError("Failed to fetch books");
    } finally {
      setLoading(false);
      setQuery("");
    }
  };
  useEffect(() => {
    if (books.length > 0) {
      let sortedBooks = [...books];
      if (sort === "newest") {
        sortedBooks.sort(
          (a, b) => (b.first_publish_year || 0) - (a.first_publish_year || 0)
        );
      } else {
        sortedBooks.sort(
          (a, b) => (a.first_publish_year || 0) - (b.first_publish_year || 0)
        );
      }
      setBooks(sortedBooks);
    }
  }, [sort]);

  return (
    <div>
      <Search query={query} setQuery={setQuery} fetchBooks={fetchBooks} />

      {/* Loading state */}
      <Loading loading={loading} />

      {/* Error state */}
      <Error error={error} />

      {books.length > 0 && <Sorting sort={sort} setSort={setSort} />}
      <Cards books={books} />
    </div>
  );
}

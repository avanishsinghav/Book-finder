import React from "react";
import "../../style/Card.css";

const Card = ({ book }) => {
  return (
    <div className="card">
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/150x200?text=No+Cover"
        }
        alt={book.title}
      />
      <h2>{book.title}</h2>
      <p>
        Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}
      </p>
      <p>First published: {book.first_publish_year || "N/A"}</p>
      <p>Editions: {book.edition_count}</p>
    </div>
  );
};

export default Card;

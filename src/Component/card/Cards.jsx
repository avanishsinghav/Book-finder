import React from "react";
import Card from "./Card";

const Cards = ({ books }) => {
  return (
    <div className="book-container">
      {books.map((book, index) => (
        <Card book={book} key={index} />
      ))}
    </div>
  );
};

export default Cards;

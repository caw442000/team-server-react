import React from "react";

const BooksDisplay = props => {
  return (
    <div>
      {props.books.map(book => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.year}</p>
          </div>
      )
    )}
    </div>
  );
};
export default BooksDisplay;

import React, {useState} from "react";
import BookForm from "./BookForm";
import BookCard from "./BookCard";

function Bookshelf() {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const addBook = (newbook) => {
    setBooks([...books, newbook]);
  }

  return (
    <div className="bookshelfDiv">
      
      <BookForm addBook={addBook}></BookForm>

      <BookCard books={books}></BookCard>

    </div>
  );
}

export default Bookshelf;

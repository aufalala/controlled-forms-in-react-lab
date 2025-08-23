import React, { useState } from "react";

function Bookshelf() {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newbooks, setNewBooks] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBooks((newbooks) => ({
      ...newbooks,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((books) => [...books, newbooks]);
    setNewBooks({title: "", author: ""});
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">

        <h3>Add a Book</h3>

        <form onSubmit={handleSubmit}>
          {Object.keys(newbooks).map((key) => (
            <div key={key}>
              <div>
                <label htmlFor={key}>
                  {key[0].toUpperCase() + key.slice(1)}:
                </label>
              </div>

              <div>
                <input id={key} type="text" name={key} value={newbooks[key]} onChange={handleInputChange}/>
              </div>
            </div>
          ))}

          <button type="submit">Submit</button>
        </form>
      
      </div>

      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h3>{book.title}</h3>
            <br />
            <p>by {book.author}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Bookshelf;

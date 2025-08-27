import React from 'react'

function BookCard({books}) {
  return (
    <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h3>{book.title}</h3>
            <br />
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
  )
}

export default BookCard
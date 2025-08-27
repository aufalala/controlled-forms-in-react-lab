import React, {useState} from "react";

function BookForm({addBook}) {

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
    addBook(newbooks);
    setNewBooks({title: "", author: ""});
  };

  return (
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
              <input
                id={key}
                type="text"
                name={key}
                value={newbooks[key]}
                onChange={handleInputChange}
              />
            </div>
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookForm;

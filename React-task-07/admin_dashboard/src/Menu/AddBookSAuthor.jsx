import { useState } from "react";
import AddBooks from "./AddBooks.jsx";
import AddAuthours from "./AddAuthors.jsx";
import { Typography } from "antd";

function AddBookSAuthor() {
  const [view, setView] = useState("AddBook");

  return (
    <>
      <div className="AddBookSAuthor">
        <nav>
          <h3
            onClick={() => setView("AddBook")}
            style={{ color: view === "AddBook" ? "#fff" : "" }}
          >
            Add-Book
          </h3>
          <h3
            onClick={() => setView("AddAuthor")}
            style={{ color: view === "AddAuthor" ? "#fff" : "" }}
          >
            Add-Author
          </h3>
        </nav>
        {view === "AddBook" ? <AddBooks /> : <AddAuthours />}
      </div>
    </>
  );
}

export default AddBookSAuthor;

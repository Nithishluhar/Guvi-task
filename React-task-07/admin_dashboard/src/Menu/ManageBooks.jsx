import React, { useContext, useState } from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { BookContex } from "../LibrayManagement/BookContex";

function ManageBooks() {
  const { bookData } = useContext(BookContex);

  return (
    <div>
      <Typography.Title level={4}>LIST OF BOOKS</Typography.Title>
      <div className="container">
        <table id="dataTable">
          <thead>
            <tr>
              <th>Book_Title:</th>
              <th>Author_name:</th>
              <th>ISBN_number:</th>
              <th>Publication_Date:</th>
              <th>Action:</th>
            </tr>
          </thead>
          <tbody>
            {bookData &&
              bookData.map((item, i) => (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.author_name}</td>
                  <td>{item.isbn_number}</td>
                  <td>{item.publication_date}</td>
                  <td style={{ background: "violet" }}>
                    <Link
                      style={{ color: "white", textAlign: "center" }}
                      to={`/edit/${i}`}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageBooks;

import { Typography } from 'antd'
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BookContex } from "../LibrayManagement/BookContex";

function ManageAuthors() {
  const { bookData } = useContext( BookContex);

  return (
    <div>
         <Typography.Title level={4} >Authors Details</Typography.Title >

         <div className="card_container">
        {bookData &&
          bookData.map((item, i) => (
            <div className="card text-bg mb-3" key={i}>
              <div className="card-header">
                <p>
                  <b>Authour :</b> {item.author_name}
                </p>
              </div>
              <div className="card-body">
                <p className="d-flex ">
                  <b>Date of Birth:</b> {item.birth_date}
                </p>
                <p className="card-text">
                  <b>Biography:</b>{item.biography}
                </p>
          <Link to={`/editAuthor/${i}`} className="btn btn-primary ms-3">
            Edit
          </Link>
          
              </div>
            </div>
          ))}
      </div>

    </div>
  )
}

export default ManageAuthors
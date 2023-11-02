import React, { useEffect, useState, useContext } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../LibrayManagement/Validation";
import { date } from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BookContex } from "./BookContex";

function Editbooks() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { bookData } = useContext(BookContex);
  const { setBookData } = useContext(BookContex);

  // console.log(bookData);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();

    const updatedBook = {
      ...bookData[id],
      title: values.title,
      author_name: values.author_name,
      isbn_number: values.isbn_number,
      publication_date: values.publication_date,
    };

    const updatedBookData = [...bookData];
    updatedBookData[id] = updatedBook;

    setBookData(updatedBookData);

    navigate("/manageBooks");
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      title: bookData[id].title,
      author_name: bookData[id].author_name,
      isbn_number: bookData[id].isbn_number,
      publication_date: bookData[id].publication_date,
    },

    onSubmit,
    validationSchema: basicSchema,
  });

  // console.log(errors);
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="title">Title</label>
          <input
            value={values.title}
            onChange={handleChange}
            id="title"
            name="title"
            type="text"
            placeholder="Enter Book title"
            onBlur={handleBlur}
            className={errors.title && touched.title ? "input-error" : ""}
          />
          {errors.title && touched.title && (
            <p className="error">{errors.title}</p>
          )}
          <label htmlFor="author_name">Author_name</label>
          <input
            id="author_name"
            type="author_name"
            placeholder="Enter Book author_name"
            value={values.author_name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.author_name && touched.author_name ? "input-error" : ""
            }
          />
          {errors.author_name && touched.author_name && (
            <p className="error">{errors.author_name}</p>
          )}
          <label htmlFor="isbn_number">ISBN_number</label>
          <input
            id="isbn_number"
            type="numbers"
            placeholder="Enter  isbn_number"
            value={values.isbn_number}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.isbn_number && touched.isbn_number ? "input-error" : ""
            }
          />
          {errors.isbn_number && touched.isbn_number && (
            <p className="error">{errors.isbn_number}</p>
          )}
          <label htmlFor="publication_date">Publication_Date</label>
          <input
            id="publication_date"
            type="date"
            placeholder="publication_date"
            value={values.publication_date}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.publication_date && touched.publication_date
                ? "input-error"
                : ""
            }
          />
          {errors.publication_date && touched.publication_date && (
            <p className="error">{errors.publication_date}</p>
          )}
          <button
            disabled={isSubmitting}
            type="submit"
            style={{ background: "orange" }}
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default Editbooks;

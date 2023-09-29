import { Typography } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { useFormik } from "formik";
import { date } from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { basicSchema } from "../LibrayManagement/Validation";
import { BookContex } from "../LibrayManagement/BookContex";

function AddBookSAuthor() {
  const navigate = useNavigate();
  const { bookData } = useContext(BookContex);
  const { setBookData } = useContext(BookContex);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    setBookData([
      ...bookData,
      {
        title: values.title,
        isbn_number: values.isbn_number,
        publication_date: values.publication_date,
        author_name: values.author_name,
        birth_date: "",
        biography: "",
      },
    ]);
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
      title: "",
      author_name: "",
      isbn_number: "",
      publication_date: "",
      birth_date: "",
      biography: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  // console.log(errors);
  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            id="title"
            type="title"
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBookSAuthor;

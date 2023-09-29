import React, { useContext, useState } from "react";
import { BookContex } from "../LibrayManagement/BookContex";
import { Form, Formik } from "formik";
import CustomInput from "../Menu/CustomInputs/NameInput";
import TextArea from "../Menu/CustomInputs/TextArea";
import { advancedSchema } from "../LibrayManagement/Validation";
import { useNavigate, useParams } from "react-router-dom";

function EditAuthor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { bookData } = useContext(BookContex);
  const { setBookData } = useContext(BookContex);

  const onSubmit = async (values, action) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    action.resetForm();
    console.log(values);
    const updatedBook = {
        ...bookData[id],
        author_name: values.author_name,
        birth_date: values.birth_date,
        biography: values.biography,
      };
  
      const updatedBookData = [...bookData];
      updatedBookData[id] = updatedBook;
  
      setBookData(updatedBookData);
      navigate("/manageAuthors")
  };

  return (
    <div className="formik">
      <Formik
        initialValues={{ author_name: bookData[id].author_name, birth_date: bookData[id].birth_date, biography:bookData[id].biography }}
        validationSchema={advancedSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Author Name"
              name="author_name"
              type="text"
              placeholder="Enter author_name"
            />
            <CustomInput
              label=" Birth Date"
              name="birth_date"
              type="date"
              placeholder="Enter Date"
            />
            <TextArea
              label="Biography"
              name="biography"
              type="textarea"
              rows="4"
              cols="50"
            />
            <button
              disabled={isSubmitting}
              type="submit"
              style={{ background: "orange" }}
            >
              Update
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditAuthor;

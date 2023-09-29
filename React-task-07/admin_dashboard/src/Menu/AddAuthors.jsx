import React, { useContext, useState } from "react";
import { BookContex } from "../LibrayManagement/BookContex";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInputs/NameInput";
import TextArea from "./CustomInputs/TextArea";
import { advancedSchema } from "../LibrayManagement/Validation";
import { useNavigate } from "react-router-dom";

function AddAuthors() {
  const { bookData } = useContext(BookContex);
  const { setBookData } = useContext(BookContex);
  const navigate = useNavigate();

  const onSubmit = async (values, action) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    action.resetForm();
    console.log(values);
    setBookData([
      ...bookData,
      {
        author_name: values.author_name,
        birth_date: values.birth_date,
        biography: values.biography,
      },
    ]);
    navigate("/manageAuthors");
  };

  return (
    <>
      <Formik
        initialValues={{ author_name: "", birth_date: "", biography: "" }}
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
              placeholder="Enter author_name"
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
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddAuthors;

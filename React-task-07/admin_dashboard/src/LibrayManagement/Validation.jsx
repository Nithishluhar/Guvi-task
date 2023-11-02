import * as yup from "yup";

export const basicSchema = yup.object().shape({
  title: yup.string().trim().min(6, "less than 6 characters").required("Required"),
  author_name: yup
    .string()
    .trim()
    .min(5, "less than 5 characters")
    .required("Required ")
    .required("Required"),
  isbn_number: yup.number()
   .min(5, " min 5  digits")
    .positive()
    .required("Required"),
  publication_date: yup.date().required(" Date Required"),
});

export const advancedSchema = yup.object().shape({
  author_name: yup
    .string()
    .trim()
    .min(6, "author name must be at least 6 characters long")
    .required("Required"),
  birth_date: yup.date().required("Date Required"),
  biography: yup
    .string()
    .trim()
    .min(15, "biograpy must be at least 15 words long")
    .required("Required"),
});

import * as yup from "yup";

import { ky_KG, linkRegExp } from "../regExp/regExp";

export const contactsSchema = yup.object({
  info: yup.string().max(100).required("Fill the field please"),
  phone1: yup
    .string()
    .required("Fill the Field please")
    .matches(ky_KG, "Please enter a valid Kyrgyz Republic phone number"),
  phone2: yup.string().matches(ky_KG, "Please enter a valid Kyrgyz Republic phone number"),
  email: yup.string().required("Fill the field please"),
  link: yup
    .string()
    .required("Fill the field please")
    .matches(linkRegExp, "Please enter a valid link"),
  telegram: yup
    .string()
    .required("Fill the field please")
    .matches(linkRegExp, "Please enter a valid link"),
  instagram: yup
    .string()
    .required("Fill the field please")
    .matches(linkRegExp, "Please enter a valid link"),
  youtube: yup
    .string()
    .required("Fill the field please")
    .matches(linkRegExp, "Please enter a valid link"),
  photo: yup.mixed().test("required", "please add photo", (value) => {
    return value && value.length;
  }),
});

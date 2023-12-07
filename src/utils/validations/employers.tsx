import * as yup from "yup";

import { ky_KG, linkRegExp } from "../regExp/regExp";

export const employersSchema = yup.object({
  name: yup.string().required("Fill the field please"),
  info: yup.string().max(100).required("Fill the field please"),
  phone1: yup
    .string()
    .required("Fill the Field please")
    .matches(ky_KG, "Please enter a valid Kyrgyz Republic phone number"),
  phone2: yup.string().matches(ky_KG, "Please enter a valid Kyrgyz Republic phone number"),
  website: yup
    .string()
    .required("Fill the field please")
    .matches(linkRegExp, "Please enter a valid link"),
  speciality: yup.string().required("Fill the field please"),
  avatar: yup.mixed().test("required", "please add photo", (value) => {
    return value && value.length;
  }),
});

import * as yup from "yup";

import { ky_KG, linkRegExp } from "../regExp/regExp";

export const changeEmployeeSchema = yup.object({
  name: yup.string().notRequired(),
  info: yup.string().max(100).notRequired(),
  phone1: yup
    .string()
    .notRequired()
    .matches(ky_KG, "Please enter a valid Kyrgyz Republic phone number"),
  phone2: yup
    .string()
    .notRequired()
    .matches(ky_KG, "Please enter a valid Kyrgyz Republic phone number"),
  website: yup.string().notRequired().matches(linkRegExp, "Please enter a valid link"),
  speciality: yup.string().notRequired(),
  avatar: yup
    .mixed()
    .notRequired()
    .test((value) => {
      return value && value.length;
    }),
});

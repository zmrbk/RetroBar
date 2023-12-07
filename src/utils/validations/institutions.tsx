import * as yup from "yup";

import { ky_KG, linkRegExp } from "../regExp/regExp";

export const instSchema = yup.object({
  pubname: yup.string().required("Fill the field please"),
  info: yup.string().max(100).required("Fill the field please"),
  phone1: yup
    .string()
    .required("Fill the field please")
    .min(1, "phone")
    .matches(ky_KG, "Please enter a valid Kyrgyz Republic phone number"),
  phone2: yup
    .string()
    .min(1, "phone")
    .matches(ky_KG, "Please enter a valid Kyrgyz Republic phone number"),
  website: yup
    .string()
    .required("Fill the field please")
    .matches(linkRegExp, "Please enter a valid link"),
  workinghours: yup.string().required("Fill the field please"),
  averagecheck: yup.number().required("Fill the field please"),
  kitchen: yup.string().required("Fill the field please"),
  location1: yup.string().required("Fill the field please"),
  location2: yup.string(),
  service: yup.string().required("Fill the field please"),
  rating: yup.mixed(),
  pubphotos: yup.mixed().test("required", "please add photo", (value) => {
    return value && value.length;
  }),
  publogo: yup.mixed().test("required", "please add photo", (value) => {
    return value && value.length;
  }),
  link: yup
    .string()
    .required("Fill the field please")
    .matches(linkRegExp, "Please enter a valid link"),
});

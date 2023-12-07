import * as yup from "yup";

import { linkRegExp, dateRegExp } from "../regExp/regExp";

export const photoSchema = yup.object({
  link: yup
    .string()
    .required("Fill the field please")
    .matches(linkRegExp, "Please enter a valid link"),
  pubname: yup.string().required("Fill the field please"),
  eventname: yup.string().required("Fill the field please"),
  photographer: yup.string().required("Fill the field please"),
  date: yup
    .string()
    .required("Fill the Field please")
    .matches(dateRegExp, "Please enter a valid date in yyyy-mm-dd format"),
  multiplier: yup.mixed(),
  eventphotos: yup.mixed().test("required", "please add photo", (value) => {
    return value && value.length;
  }),
});

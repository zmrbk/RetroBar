import * as yup from "yup";

import { linkRegExp } from "../regExp/regExp";

export const posterSchema = yup.object({
  link: yup
    .string()
    .required("Fill the field please")
    .matches(linkRegExp, "Please enter a valid link"),
  posterphoto: yup.mixed().test("required", "please add photo", (value) => {
    return value && value.length;
  }),
});

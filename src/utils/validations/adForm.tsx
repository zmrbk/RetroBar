import * as yup from "yup";

import { ky_KG } from "../regExp/regExp";

export const adSchema = yup.object({
  name: yup.string().required("Fill the field please"),
  info: yup.string().max(40).required("Fill the field please"),
  phone: yup
    .string()
    .required("Fill the Field please")
    .matches(ky_KG, "Please enter a valid Kyrgyz Republic phone number"),
  adphoto: yup.mixed().test("required", "please add photo", (value) => {
    return value && value.length;
  }),
});

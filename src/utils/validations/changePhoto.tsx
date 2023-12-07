import * as yup from "yup";

import { linkRegExp, dateRegExp } from "../regExp/regExp";

export const changePhotoSchema = yup.object({
  link: yup.string().matches(linkRegExp, "Please enter a valid link"),
  pubname: yup.string(),
  eventname: yup.string(),
  photographer: yup.string(),
  date: yup.string().matches(dateRegExp, "Please enter a valid date in yyyy-mm-dd format"),
  multiplier: yup.mixed(),
  eventphotos: yup.mixed().test((value) => {
    return value && value.length;
  }),
});

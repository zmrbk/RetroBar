import { Input } from "@mui/material";
import { useState } from "react";
import isDate from "validator/lib/isDate";

import classes from "../../../adminPage.module.scss";

const DateValid = () => {
  const [dateValue, setDateValue] = useState("");
  const [error, setError] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const handleDate = (dateValue: string) => {
    setDateValue(dateValue);
    if (!isDate(dateValue)) {
      setError("field is incorrect");
    } else {
      setError("");
    }
  };

  const blurHandler = () => {
    setIsDirty(true);
    if (!dateValue) {
      setError("it cant be empty");
    }
  };

  return (
    <div>
      <Input
        className={error ? classes.wrongUrl : classes.input}
        value={dateValue}
        onChange={(e) => handleDate(e.target.value)}
        onBlur={blurHandler}
        placeholder="Введите дату yyyy/mm/dd"
      />
      {error && isDirty && <div className={classes.inputWrongNameLink}>{error}</div>}
    </div>
  );
};

export default DateValid;

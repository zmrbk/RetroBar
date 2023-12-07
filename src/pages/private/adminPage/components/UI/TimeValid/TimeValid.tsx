import { Input } from "@mui/material";
import { useState } from "react";
import validator from "validator";

import classes from "../../../adminPage.module.scss";

const TimeValid = () => {
  const [timeValue, setTimeValue] = useState("");

  const [error, setError] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const timeRegex = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;

  const timeHandler = (time: string) => {
    setTimeValue(time);
    let trimmedTime = validator.trim(time);
    const timeArr = trimmedTime.split("-");
    const start = validator.trim(timeArr[0]);
    const end = validator.trim(timeArr[1]);
    if (!timeRegex.test(start) || !timeRegex.test(end)) {
      setError("field is incorrect");
    } else {
      setError("");
    }
  };

  const blurHandler = () => {
    setIsDirty(true);
    if (!timeValue) {
      setError("it cant be empty");
    }
  };

  return (
    <>
      <Input
        className={error ? classes.wrongUrl : classes.input}
        type="text"
        placeholder="Введите режим 00:00-00:00"
        onChange={(e) => timeHandler(e.target.value)}
        onBlur={blurHandler}
        value={timeValue}
      />
      {error && isDirty && <div className={classes.inputWrongNameLink}>{error}</div>}
    </>
  );
};

export default TimeValid;

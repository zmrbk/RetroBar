import { useState } from "react";
import { Input } from "@mui/material";

import { IInputName } from "../../../../../../utils/types/admiMenu";
import classes from "../../../adminPage.module.scss";

const MyInput = ({ name, blurHandler, onChange, placeholder, value }: IInputName) => {
  const [error] = useState("");

  return (
    <div>
      <Input
        onChange={(e) => onChange(e)}
        onBlur={blurHandler}
        value={value}
        className={error ? classes.wrongUrl : classes.input}
        type="text"
        name={name}
        placeholder={placeholder}
      />
      {error && <div className={classes.inputWrongNameLink}>{error}</div>}
    </div>
  );
};

export default MyInput;

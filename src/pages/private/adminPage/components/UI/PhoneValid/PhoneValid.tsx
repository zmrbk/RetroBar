import { useState } from "react";
import validator from "validator";
import Input from "@mui/material/Input";

import classes from "../../../adminPage.module.scss";
import { plusIcon } from "../../../../../../assets/adminPage/adminPage";

import styles from "./phoneValid.module.scss";

const PhoneValid = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const ky_KG = /^(\+?996|0)\d{9}$/;

  const validate = (phoneNumber: string) => {
    setValue(phoneNumber);
    let phone = validator.trim(phoneNumber);
    if (!ky_KG.test(phone)) {
      setError("field is incorrect");
    } else {
      setError("");
    }
  };

  const blurHandler = () => {
    setIsDirty(true);
    if (!value) {
      setError("it cant be empty");
    }
  };

  return (
    <div>
      <div className={styles.NameBlock}>
        <div className={styles.name}>Номер</div>
        <img className={styles.ratingIcon} src={plusIcon} alt="" />
      </div>
      <Input
        className={error ? styles.wrongUrl : classes.input}
        type="text"
        placeholder="Введите номер телефона"
        onChange={(e) => validate(e.target.value)}
        onBlur={blurHandler}
        value={value}
      />
      {error && <div className={styles.inputWrongNameLink}>{error}</div>}
    </div>
  );
};

export default PhoneValid;

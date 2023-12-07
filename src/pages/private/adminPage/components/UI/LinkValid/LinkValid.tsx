import { useState } from "react";
import isURL from "validator/lib/isURL";
import Input from "@mui/material/Input";

import classes from "../../../adminPage.module.scss";
import { ILink } from "../../../../../../utils/types/admiMenu";

import styles from "./linkValid.module.scss";

const LinkValid = ({ linkName, linkLogo }: ILink) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const validate = (url: string) => {
    setValue(url);
    if (!isURL(url)) {
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
    <>
      <div className={styles.addLinkName}>
        <div className={classes.inputNameLink}>{linkName}</div>
        <img className={styles.linkIcon} src={linkLogo} alt="" />
      </div>
      <Input
        value={value}
        className={error ? styles.wrongUrl : classes.input}
        type="text"
        placeholder="Введите ссылку"
        onBlur={blurHandler}
        onChange={(e) => validate(e.target.value)}
      />
      {error && isDirty && <div className={styles.inputWrongNameLink}>{error}</div>}
    </>
  );
};

export default LinkValid;

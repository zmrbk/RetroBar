import { useState } from "react";
import { TextareaAutosize } from "@mui/material";

import classes from "../../../adminPage.module.scss";

interface DescriptionType {
  errors: any;
  register: any;
  description?: string;
  limit: number;
  width: number;
  setChange?: any;
}

const Description = ({
  limit,
  width,
  register,
  errors,
  description,
  setChange,
}: DescriptionType) => {
  const [charCount, setCharCount] = useState(0);
  const [colored, setColored] = useState("");
  const [correctText, setCorrectText] = useState("");
  const [text, setText] = useState("");

  const handleInput = (text: string) => {
    setText(text);
    if (description) {
      setChange(text);
    }
    setCharCount(text.length);
    setCorrectText(text.substr(0, limit));
    setColored(text.substr(limit, text.length));
  };

  return (
    <div>
      <TextareaAutosize
        style={
          text
            ? {
                opacity: 0,
                position: "absolute",
              }
            : {
                color: "white",
                padding: 5,
                marginBottom: 42,
                background: "transparent",
                outline: "none",
                border: "none",
                width: 400,
                borderBottom: "1px solid gray",
                cursor: "text",
                display: "block",
                minHeight: 20,
                height: "max-content",
                wordBreak: "break-all",
              }
        }
        id="input"
        value={description ? description : text}
        {...register}
        onChange={(e) => handleInput(e.target.value)}
        className={errors?.info?.message ? classes.wrongUrl : classes.input}
        placeholder="Введите описание"
      />
      <label
        className={classes.input}
        style={
          text
            ? {
                cursor: "text",
                display: "block",
                width: width,
                minHeight: 20,
                height: "max-content",
                wordBreak: "break-all",
              }
            : {
                opacity: 0,
                position: "absolute",
              }
        }
        htmlFor="input">
        <span>{correctText}</span>
        <span style={{ color: "red" }}>{colored}</span>
      </label>
      {charCount > limit ? (
        <span style={{ color: "red" }} className={classes.charCount}>
          {charCount} из {limit} символов
        </span>
      ) : (
        <span className={classes.charCount}>
          {description ? description.length : charCount} из {limit} символов
        </span>
      )}
      <p className={classes.inputWrongNameLink}>{errors?.info?.message}</p>
    </div>
  );
};

export default Description;

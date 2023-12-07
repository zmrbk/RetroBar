import { useEffect, useState } from "react";

import { addPhotoCircle } from "../../../../../../assets/adminPage/adminPage";
import classes from "../../../adminPage.module.scss";
import styles from "../../adminAdvertising/components/form/form.module.scss";

const LogoAdd = ({ register, errors }: any) => {
  const [logo, setLogo] = useState<any>("");
  const [previewLogo, setPreviewLogo] = useState<any>([]);

  useEffect(() => {
    if (previewLogo.length !== 0) {
      setLogo(previewLogo[0]);
    }
  }, [previewLogo]);

  const onHandleChangeImage = (e: any) => {
    e.preventDefault();
    setPreviewLogo([]);
    console.log(e.target.files);

    if (e.target.file?.type.indexOf("image") === -1) {
      setLogo([]);
    }

    for (let j = 0, f; (f = e.target.files[j]); j++) {
      const FReader = new FileReader();
      FReader.onload = (function (theFile) {
        return function (e: any) {
          setPreviewLogo((prev: any) => [...prev, e.target?.result?.split(" ").join(",")]);
        };
      })(f);
      FReader.readAsDataURL(f);
    }
  };

  const logostyles = {
    width: 267,
    borderRadius: "50%",
    height: 277,
  };

  return (
    <>
      <label htmlFor="addPoster">
        <img
          className={styles.addPhotoCircle}
          src={logo === "" ? addPhotoCircle : logo}
          alt=""
          style={logostyles}
        />
        <input
          placeholder="addPosPosterImage"
          type="file"
          id="addPoster"
          {...register}
          onChange={(e) => onHandleChangeImage(e)}
          accept="image/*,.png, .jpg,"
          style={{ opacity: 0, position: "absolute" }}
        />
      </label>
      <div>
        <p className={classes.inputWrongNameLink}>{errors?.publogo?.message}</p>
      </div>
    </>
  );
};

export default LogoAdd;

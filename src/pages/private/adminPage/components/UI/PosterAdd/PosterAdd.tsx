import { useEffect, useState } from "react";

import { addBanner } from "../../../../../../assets/adminPage/adminPage";
import classes from "../../../adminPage.module.scss";
import styles from "../../adminAdvertising/components/form/form.module.scss";

const PosterAdd = ({ register, errors }: any) => {
  const [poster, setPoster] = useState<any>("");
  const [previewPoster, setPreviewPoster] = useState<any>([]);

  useEffect(() => {
    if (previewPoster.length !== 0) {
      setPoster(previewPoster[0]);
    }
  }, [previewPoster]);

  const onHandleChangeImage = (e: any) => {
    e.preventDefault();
    setPreviewPoster([]);
    console.log(e.target.files);

    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]?.type.indexOf("image") === -1) {
        setPoster([]);
      }
    }

    for (let j = 0, f; (f = e.target.files[j]); j++) {
      const FReader = new FileReader();
      FReader.onload = (function (theFile) {
        return function (e: any) {
          setPreviewPoster((prev: any) => [...prev, e.target?.result?.split(" ").join(",")]);
        };
      })(f);
      FReader.readAsDataURL(f);
    }
  };

  const imageClickHandler = (index: string) => {
    setPoster(previewPoster[index]);
  };

  return (
    <>
      <label htmlFor="addPoster">
        <img
          className={styles.addBanner}
          src={poster === "" ? addBanner : poster}
          alt=""
          width={890}
          height={178}
        />
        <input
          placeholder="addPosPosterImage"
          type="file"
          id="addPoster"
          {...register}
          onChange={(e) => onHandleChangeImage(e)}
          accept="image/*,.png, .jpg,"
          multiple
          style={{ opacity: 0, position: "absolute" }}
        />
      </label>
      <div>
        {previewPoster &&
          previewPoster.map((pstr: any, index: string) => (
            <img
              key={String(index + pstr)}
              src={pstr}
              alt={pstr}
              style={{ margin: "3px 1.5px 0px", maxHeight: "105px", maxWidth: "75px" }}
              onClick={(e) => imageClickHandler(index)}
            />
          ))}
        <p className={classes.inputWrongNameLink}>{errors?.posterphoto?.message}</p>
      </div>
    </>
  );
};

export default PosterAdd;

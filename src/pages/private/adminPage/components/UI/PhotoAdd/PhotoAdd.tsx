import { useEffect, useState } from "react";

import { addPhoto } from "../../../../../../assets/adminPage/adminPage";
import { API } from "../../../../../../utils/api";
import classes from "../../../adminPage.module.scss";
import styles from "../../adminPhotoPage/components/form/form.module.scss";

interface PhotoAddType {
  errors: any;
  register: any;
  photos?: string[];
  setChange?: any;
  setNewPhoto?: any;
}

const PhotoAdd = ({ register, errors, photos, setChange, setNewPhoto }: PhotoAddType) => {
  const [images, setImages] = useState<any>("");
  const [previewImg, setPreviewImg] = useState<any>([]);

  useEffect(() => {
    if (previewImg.length !== 0) {
      setImages(previewImg[0]);
    }
  }, [previewImg]);

  const onHandleChangeImage = (e: any) => {
    if (photos) {
      setNewPhoto(e.target.files);

      setChange("");
      console.log("e.target.files", e.target.files);
    }
    e.preventDefault();
    setPreviewImg([]);

    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]?.type.indexOf("image") === -1) {
        setImages([]);
      }
    }

    for (let j = 0, f; (f = e.target.files[j]); j++) {
      const FReader = new FileReader();
      FReader.onload = (function (theFile) {
        return function (e: any) {
          setPreviewImg((prev: any) => [...prev, e.target?.result?.split(" ").join(",")]);
        };
      })(f);
      FReader.readAsDataURL(f);
    }
  };

  const imageClickHandler = (index: any) => {
    setImages(previewImg[index]);
  };

  return (
    <>
      <label htmlFor="addPhoto">
        <img
          className={styles.addPhoto}
          src={photos ? API + photos[0] : images === "" ? addPhoto : images}
          alt=""
          width={450}
          height={450}
        />
        <input
          placeholder="addPhotoImage"
          type="file"
          id="addPhoto"
          {...register}
          onChange={(e) => onHandleChangeImage(e)}
          accept="image/*,.png, .jpg,"
          multiple
          style={{ opacity: 0, position: "absolute" }}
        />
      </label>
      <div>
        {photos
          ? photos?.map((img: any, index: any) => (
              <img
                key={String(String(index) + img)}
                src={API + img}
                alt={img}
                style={{ margin: "3px 1.5px 0px", maxHeight: "105px", maxWidth: "75px" }}
                onClick={(e) => imageClickHandler(index)}
              />
            ))
          : previewImg &&
            previewImg.map((img: any, index: string) => (
              <img
                key={String(String(index) + img)}
                src={img}
                alt={img}
                style={{ margin: "3px 1.5px 0px", maxHeight: "105px", maxWidth: "75px" }}
                onClick={(e) => imageClickHandler(index)}
              />
            ))}
        <p className={classes.inputWrongNameLink}>{errors?.eventphotos?.message}</p>
      </div>
    </>
  );
};

export default PhotoAdd;

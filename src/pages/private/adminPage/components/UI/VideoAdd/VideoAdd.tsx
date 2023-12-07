import { useEffect, useState } from "react";

import { addVideo } from "../../../../../../assets/adminPage/adminPage";
import classes from "../../../adminPage.module.scss";
import styles from "../../adminPhotoPage/components/form/form.module.scss";

const VideoAdd = ({ register, errors }: any) => {
  const [videos, setVideos] = useState<any>("");
  const [previewVideo, setPreviewVideo] = useState<any>([]);

  useEffect(() => {
    if (previewVideo.length !== 0) {
      setVideos(previewVideo[0]);
    }
  }, [previewVideo]);

  const onHandleChangeImage = (e: any) => {
    e.preventDefault();
    console.log(e.target.files);

    setPreviewVideo([]);
    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]?.type.indexOf("video") === -1) {
        setVideos([]);
      }
    }
    for (let j = 0, f; (f = e.target.files[j]); j++) {
      const FReader = new FileReader();
      FReader.onload = (function (theFile) {
        return function (e: any) {
          setPreviewVideo((prev: any) => [...prev, e.target?.result?.split(" ").join(",")]);
        };
      })(f);
      FReader.readAsDataURL(f);
    }
  };

  const videoClickHandler = (index: string) => {
    setVideos(previewVideo[index]);
  };

  return (
    <>
      <label htmlFor="addVideo">
        {videos === "" ? (
          <img className={styles.addVideo} src={addVideo} alt="" />
        ) : (
          <video className={styles.addVideo} controls src={videos} height={400} width={450} />
        )}
        <input
          placeholder="addVideoImage"
          type="file"
          id="addVideo"
          {...register("eventvideos")}
          onChange={(e) => onHandleChangeImage(e)}
          accept=".mov,.mp4"
          multiple
          style={{ opacity: 0, position: "absolute" }}
        />
      </label>
      <div>
        {previewVideo &&
          previewVideo.map((video: any, index: string) => (
            <video
              key={String(index + video)}
              src={video}
              style={{ margin: "3px 1.5px 0px", maxHeight: "75px", maxWidth: "75px" }}
              onClick={(e) => videoClickHandler(index)}
              height={75}
              width={75}
            />
          ))}
        <p className={classes.inputWrongNameLink}>{errors?.eventvideos?.message}</p>
      </div>
    </>
  );
};

export default VideoAdd;

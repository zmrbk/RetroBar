import { eye } from "../../assets/photoPage";

import { playIcon } from "../../assets/videoPage";
import { videoCardProps } from "../../utils/types/videoPage";

import styles from "./videoCover.module.scss";

function VideoCoverCard({ title, imgSrc, views }: videoCardProps) {
  return (
    <div className={styles.videoCover}>
      <img className={styles.videoCoverImg} src={imgSrc} alt="" />
      <img className={styles.playIcon} src={playIcon} alt="" />
      <div className={styles.innerContent}>
        <div className={styles.contentViews}>
          <img src={eye} alt="" />
          <span>{views}</span>
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default VideoCoverCard;

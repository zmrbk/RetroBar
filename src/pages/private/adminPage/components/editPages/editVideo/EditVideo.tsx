import AdminMenu from "../../UI/adminMenu/AdminMenu";
import EditMenu from "../../UI/EditMenu/EditMenu";
import classes from "../../../adminPage.module.scss";
import { playIcon, videoCoverImg } from "../../../../../../assets/videoPage";
import { eye } from "../../../../../../assets/photoPage";
import { ChangeButton, DeleteButton } from "../../../constants";

import styles from "./EditVideos.module.scss";

const videoBase = [
  {
    id: 1,
    date: "1 мая 2022",
    bases: [
      {
        id: 1,
        video: "https://www.twitch.tv/just_n",
        title: "SUZIE WONG / OPENING | MOT",
        videoCover: videoCoverImg,
        views: 0,
      },
      {
        id: 2,
        video: "https://www.twitch.tv/just_n",
        title: "SUZIE WONG / OPENING | MOT",
        videoCover: videoCoverImg,
        views: 0,
      },
    ],
  },
  {
    id: 2,
    date: "24 мая 2022",
    bases: [
      {
        id: 1,
        video: "https://www.twitch.tv/just_n",
        title: "SUZIE WONG / OPENING | MOT",
        videoCover: videoCoverImg,
        views: 0,
      },
      {
        id: 2,
        video: "https://www.twitch.tv/just_n",
        title: "SUZIE WONG / OPENING | MOT",
        videoCover: videoCoverImg,
        views: 0,
      },
      {
        id: 3,
        video: "https://www.twitch.tv/just_n",
        title: "SUZIE WONG / OPENING | MOT",
        videoCover: videoCoverImg,
        views: 0,
      },
    ],
  },
  {
    id: 3,
    date: "15 марта 2022",
    bases: [
      {
        id: 1,
        video: "https://www.twitch.tv/just_n",
        title: "SUZIE WONG / OPENING | MOT",
        videoCover: videoCoverImg,
        views: 0,
      },
      {
        id: 2,
        video: "https://www.twitch.tv/just_n",
        title: "SUZIE WONG / OPENING | MOT",
        videoCover: videoCoverImg,
        views: 0,
      },
      {
        id: 3,
        video: "https://www.twitch.tv/just_n",
        title: "SUZIE WONG / OPENING | MOT",
        videoCover: videoCoverImg,
        views: 0,
      },
    ],
  },
];

const EditVideo = () => {
  return (
    <div className={classes.containerParent}>
      <AdminMenu />
      <div className={classes.editContainer}>
        <h2>Изменить</h2>
        <EditMenu />
        {videoBase.map((day, index) => (
          <div className={styles.cardsBlock} key={day.id}>
            <h1 style={{ marginBottom: "40px" }}>{day.date}</h1>
            <div className={styles.editVideoCards}>
              {videoBase[index].bases.map((item: any) => (
                <div className={styles.innerCard}>
                  <div className={styles.videoCoverAd}>
                    <img className={styles.videoCoverImgAd} src={item.videoCover} alt="" />
                    <img className={styles.playIconAd} src={playIcon} alt="" />
                    <div className={styles.innerContentAd}>
                      <div className={styles.contentViewsAd}>
                        <img src={eye} alt="" />
                        <span>{item.views}</span>
                      </div>
                      <span>{item.title}</span>
                    </div>
                  </div>
                  <div className={styles.buttons}>
                    <button className={styles.edButton}>{ChangeButton}</button>
                    <button className={styles.delButton}>{DeleteButton}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default EditVideo;

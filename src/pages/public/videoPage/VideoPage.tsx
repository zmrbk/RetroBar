import { useState } from "react";

import { mainVideoCover, video, videoCoverImg } from "../../../assets/videoPage";
import TwoEmoji from "../../../components/twoEmoji/TwoEmoji";

import VideoPageSlider from "./components/videoPageSlider";
import ModalVideo from "./components/modalVideo";
import styles from "./videoPage.module.scss";

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

function VideoPage() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className={styles.videoPage}>
        <div className={styles.container}>
          <video className={styles.mainPlayer} controls poster={mainVideoCover}>
            <source src={video} />
          </video>
          {videoBase.map((item) => (
            <div key={item.id} style={{ marginTop: "100px" }}>
              <h1 style={{ marginBottom: "40px" }}>{item.date}</h1>
              <VideoPageSlider setActive={setModalActive} videos={item.bases} />
            </div>
          ))}
          <TwoEmoji />
        </div>
      </div>
      <ModalVideo active={modalActive} setActive={setModalActive} />
    </>
  );
}

export default VideoPage;

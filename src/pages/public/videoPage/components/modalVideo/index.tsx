import { eye } from "../../../../../assets/photoPage";
import { camera, video } from "../../../../../assets/videoPage";

import styles from "./styles.module.scss";

function ModalVideo({ active, setActive }: { active: boolean; setActive: Function }) {
  return (
    <div
      onClick={() => setActive(false)}
      className={`${styles.modal} ${active ? styles.active : ""}`}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <video
          className={styles.modalVideo}
          controls
          poster="https://wallpaperaccess.com/full/5112240.jpg">
          <source src={video} />
        </video>
        <div className={styles.modalText}>
          <div className={styles.leftContent}>
            <div>
              <img src={camera} alt="" />
              Видеограф: студия “Оригами”
            </div>
            <div>
              <img src={eye} alt="" />
              6455
            </div>
          </div>
          <div className={styles.rightContent}>
            <h6>14 мая 2022</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalVideo;

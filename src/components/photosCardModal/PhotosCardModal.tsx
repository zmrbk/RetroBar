import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { MdClose } from "react-icons/md";

import { cardImages } from "../../pages/public/photosPage/PhotosPage";
import { photoCardModalProps } from "../../utils/types/photosPage";
import { downloadIcon, shareIcon } from "../../assets/photoPage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.scss";

import styles from "./styles.module.scss";

function PhotosCardModal({ active, setActive, img, title, secondTitle }: photoCardModalProps) {
  return (
    <div
      onClick={() => setActive(false)}
      className={`${styles.modal} ${active ? styles.active : ""}`}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          spaceBetween={50}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiperPhotos">
          <SwiperSlide>
            <div className={styles.modalImgText}>
              <div className={styles.modalHeader}>
                <h5>{title}</h5>
                <h6>{secondTitle}</h6>
              </div>
              <button onClick={() => setActive(false)}>
                <MdClose />
              </button>
            </div>
            <div className={styles.sliderImgBlock}>
              <img className={styles.sliderImg} src={img} alt="" />
            </div>
            <div className={styles.modalButtons}>
              <a href="#">
                Поделиться <img src={shareIcon} alt="" />
              </a>
              <a href={img} download className={styles.downloadBtn}>
                Скачать <img src={downloadIcon} alt="" />
              </a>
            </div>
          </SwiperSlide>
          {cardImages.map((item) => (
            <SwiperSlide className={styles.modalSwiper} key={item.id}>
              <div className={styles.modalImgText}>
                <div className={styles.modalHeader}>
                  <h5>{item.title}</h5>
                  <h6>{item.secondTitle}</h6>
                </div>
                <button onClick={() => setActive(false)}>
                  <MdClose />
                </button>
              </div>
              <div className={styles.sliderImgBlock}>
                <img className={styles.sliderImg} src={item.imgSrc} alt="" />
              </div>
              <div className={styles.modalButtons}>
                <a href="#">
                  Поделиться <img src={shareIcon} alt="" />
                </a>
                <a href={item.imgSrc} download className={styles.downloadBtn}>
                  Скачать <img src={downloadIcon} alt="" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PhotosCardModal;

//PHOTOS
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import back from "../assets/back (4).png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import polaroid from "../assets/polaroid.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "./sliderMot.module.scss";

function SliderMot() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return "<span class='" + className + "'>0' + (index + 1) + '</span>";
    },
  };
  const about = [
    {
      background: back,
      photo: one,
      name: "NATAN",
      date: "BLACKSTAR",
      phoneNumber: "Являясь всего лишь частью общей картины",
      place: "Чынгыза Айтматова, 56",
      polaroid: polaroid,
    },
    {
      background: back,
      photo: two,
      name: "MOT",
      date: "BLACKSTAR",
      phoneNumber: "Являясь всего лишь частью общей картины",
      place: "Чынгыза Айтматова, 56",
    },
    {
      background: back,
      photo: three,
      name: "TIMATI",
      date: "BLACKSTAR",
      phoneNumber: "Являясь всего лишь частью общей картины",
      place: "Чынгыза Айтматова, 56",
    },
  ];
  return (
    <div className={"swiperr"}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={3}
        spaceBetween={120}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={pagination}
        loop={true}
        speed={500}
        modules={[EffectCoverflow, Pagination]}
        className={styles.swip}>
        {about.map((item) => (
          <SwiperSlide className={styles.test}>
            <div className={styles.polaroid}>
              <img className={styles.photo1} src={item.photo} alt="miniBar" />
              <div className={styles.back}>
                <div>
                  <h1 className={styles.header}>{item.name}</h1>
                  <h4 className={styles.des}>{item.date}</h4>
                  <p>{item.phoneNumber}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderMot;

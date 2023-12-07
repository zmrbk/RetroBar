import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  mainSliderFrame,
  photoMainOne,
  photoMainTwo,
  photoMainThree,
  photoMainFour,
} from "../../../../../assets/mainPage/headerSlider/headerSlider";
import "./style.scss";

const info = [
  {
    id: "1",
    photo: photoMainOne,
  },
  {
    id: "2",
    photo: photoMainTwo,
  },
  {
    id: "3",
    photo: photoMainThree,
  },
  {
    id: "4",
    photo: photoMainFour,
  },
];

const MainSlider = () => {
  return (
    <div className="swiper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        followFinger={true}
        keyboard={{
          enabled: true,
        }}
        speed={1000}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={20}
        loop={true}
        modules={[EffectCoverflow, Pagination, Keyboard]}
        className="yourSwiper">
        {info.map((item) => {
          return (
            <SwiperSlide>
              <div className="slider">
                <div className="slider__frame">
                  <img
                    className="slider__frame__fr"
                    style={{ width: 390 }}
                    src={mainSliderFrame}
                    alt="frame"
                  />
                </div>
                <div className="slider__about">
                  <div className="slider__about__ab">
                    <img
                      style={{ width: 360 }}
                      className="slider__about__ab__photo"
                      src={item.photo}
                      alt="polaroid1"
                    />
                    <h4 className="slider__about__ab__title">ZEPPELIN BAR</h4>
                    <h5 className="slider__about__ab__text">STREET CREDIBILITY</h5>
                    <p className="slider__about__ab__time">Суббота 14 мая</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MainSlider;

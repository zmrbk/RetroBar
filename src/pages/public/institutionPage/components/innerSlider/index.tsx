import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";
import { eventBg } from "../../../../../assets/institutionBar-slider";

function InnerSlider({ base }: { base: string[] }) {
  return (
    <div className="innerSlider">
      <Swiper
        className="innerSwiper"
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          800: {
            slidesPerView: 2,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3,
          },
        }}>
        {base.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="eventSlider">
              <img className="eventImg" src={item} alt="" />
              <img className="eventBg" src={eventBg} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default InnerSlider;

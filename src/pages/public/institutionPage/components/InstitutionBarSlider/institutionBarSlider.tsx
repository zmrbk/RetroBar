import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import drums from "../../../../../assets/institutionBar-slider/drums.png";
import hall from "../../../../../assets/institutionBar-slider/hall.png";
import hookah from "../../../../../assets/institutionBar-slider/hookah.png";
import second from "../../../../../assets/institutionBar-slider/secondStage.png";
import background from "../../../../../assets/institutionBar-slider/background.png";
import tape from "../../../../../assets/institutionBar-slider/tape.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./institutionBarSlider.css";

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const photos = [
    {
      image1: drums,
    },
    {
      image1: hall,
    },
    {
      image1: hookah,
    },
    {
      image1: second,
    },
  ];

  return (
    <div className="instSwiper">
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiperInstitutionSec">
        {photos.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image1} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={window.innerWidth <= 700 ? 3 : 4}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiperInstitution">
        {photos.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="background" src={background} alt="" />
            <img className="photo__pub" src={item.image1} alt="" />
            <img className="photo__tape" src={tape} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

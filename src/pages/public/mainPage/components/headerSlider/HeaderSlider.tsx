import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import "swiper/css/autoplay";
import { Pagination, EffectCoverflow } from "swiper";

import {
  mainSliderFrame,
  photoMainFour,
  photoMainOne,
  photoMainThree,
  photoMainTwo,
} from "../../../../../assets/mainPage/headerSlider/headerSlider";
import "./headerSlider.scss";
import "./styles.scss";

interface IMainSlider {
  id: number;
  photo: string;
  title: string;
  location: string;
  date: string;
}

const info: IMainSlider[] = [
  {
    id: 1,
    photo: photoMainThree,
    title: "ZEPPELIN BAR",
    location: "STREET CREDIBILITY",
    date: "Суббота 14 мая",
  },
  {
    id: 2,
    photo: photoMainOne,
    title: "ZEPPELIN BAR",
    location: "STREET CREDIBILITY",
    date: "Суббота 14 мая",
  },
  {
    id: 3,
    photo: photoMainTwo,
    title: "ZEPPELIN BAR",
    location: "STREET CREDIBILITY",
    date: "Суббота 14 мая",
  },
  {
    id: 4,
    photo: photoMainFour,
    title: "ZEPPELIN BAR",
    location: "STREET CREDIBILITY",
    date: "Суббота 14 мая",
  },
  {
    id: 5,
    photo: photoMainTwo,
    title: "ZEPPELIN BAR",
    location: "STREET CREDIBILITY",
    date: "Суббота 14 мая",
  },
];

function HeaderSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return "<span class='" + className + "'>0' + (index + 1) + '</span>";
    },
  };
  return (
    <Swiper
      pagination={pagination}
      modules={[EffectCoverflow, Pagination]}
      effect={"coverflow"}
      grabCursor={true}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 20,
        modifier: 1,
        slideShadows: false,
      }}
      spaceBetween={20}
      slidesPerView={4}
      initialSlide={1}
      centeredSlides={true}
      speed={700}
      loop={true}
      className="main">
      {info.map((item, i) => (
        <SwiperSlide key={i} className="slide">
          <img width={400} src={mainSliderFrame} alt="polaroid" />
          <img width={370} src={item.photo} alt="photo1" />
          <div className="text">
            <div className="text_child">
              <h3>{item.title}</h3>
              <h5>{item.location}</h5>
            </div>
            <p>{item.date}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeaderSlider;

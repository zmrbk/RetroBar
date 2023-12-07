import { useNavigate } from "react-router-dom";
import { Navigation, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import {
  background,
  filmClock,
  filmFrame,
  filmGeotag,
  filmPhone,
  photoBarThree,
  photoBarTwo,
} from "../../../../../../../assets/mainPage/headerSlider/headerSlider";
import "./style.scss";

interface ITopInstitutionSlider {
  id: number;
  photo: string;
}

const topInstitutionSliders: ITopInstitutionSlider[] = [
  {
    id: 1,
    photo: background,
  },
  {
    id: 2,
    photo: photoBarTwo,
  },
  {
    id: 3,
    photo: photoBarThree,
  },
];

function TopInstitutions() {
  const navigateToInstitution = useNavigate();

  return (
    <div className="topInstitutionBg">
      <div className="topInstitutionContainer">
        <h2 className="topInstitutionTitle">Топ заведений</h2>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar, Autoplay]}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 10000,
        }}
        className="topInstitutionSwiper">
        {topInstitutionSliders.map((item, i) => {
          return (
            <SwiperSlide>
              <div className="filmContent" key={i}>
                <div className="filmSlide" onClick={() => navigateToInstitution("/institution")}>
                  <div className="filmSlideFrameBlock">
                    <img className="filmSlideFrame" src={filmFrame} alt="filmFrame" />
                  </div>
                  <div className="filmSlidePhotoBlock">
                    <img className="filmSlidePhoto" src={item.photo} alt="sliderPhoto" />
                    <div className="filmSlidePhotoContent">
                      <div className="filmTitle">MINIBAR</div>
                      <div className="filmAddress">
                        <img className="filmAddressIcon" src={filmClock} alt="clockIcon" />
                        <p>18:00-06:00</p>
                      </div>
                      <div className="filmAddress">
                        <img className="filmAddressIcon" src={filmPhone} alt="phoneIcon" />
                        <p>0 558 55 00 00</p>
                      </div>
                      <div className="filmAddress">
                        <img className="filmAddressIcon" src={filmGeotag} alt="geotagIcon" />
                        <p>Чынгыза Айтматова, 56</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TopInstitutions;

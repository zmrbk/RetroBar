import { useNavigate } from "react-router-dom";
import { Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import {
  clock,
  desserts,
  geotag,
  hotDishesIcon,
  logoKeanu,
  phone,
  photoOne,
  photoThree,
  photoTwo,
  salads,
  slideOne,
  star,
  wineIcon,
} from "../../../../../../../assets/mainPage/institutions/institutions";
import "./style.scss";

interface ISliderImg {
  id: number;
  frame: string;
  image: string;
}

const sliderImg: ISliderImg[] = [
  {
    id: 1,
    frame: slideOne,
    image: photoOne,
  },
  {
    id: 2,
    frame: slideOne,
    image: photoTwo,
  },
  {
    id: 3,
    frame: slideOne,
    image: photoThree,
  },
  {
    id: 4,
    frame: slideOne,
    image: photoTwo,
  },
];

function InstitutionSliders() {
  const navigateToInstitution = useNavigate();
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Scrollbar, Pagination, Autoplay]}
        grabCursor={true}
        spaceBetween={90}
        centeredSlides={true}
        mousewheel={true}
        slidesPerView={window.innerWidth <= 780 ? 1 : 3}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="institutionSwiper">
        {sliderImg.map((item, id) => {
          return (
            <SwiperSlide>
              <div key={id} className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slide" onClick={() => navigateToInstitution("/institution")}>
                    <img className="frameImg" src={item.frame} alt="" />
                    <img className="sliderImg" src={item.image} alt="" />
                  </div>
                </div>

                <div className="swiper-slide-content">
                  <div className="section price">
                    <img className="logo" src={logoKeanu} alt="logo" />
                    <div>
                      <p className="logoTitle">KEANU</p>
                      <p className="text">Bar</p>
                    </div>
                  </div>

                  <div className="section">
                    <div className="address">
                      <img className="icon" src={geotag} alt="location" />
                      <p className="text">Манаса 28</p>
                    </div>
                    <div className="address">
                      <img className="icon" src={clock} alt="location" />
                      <p className="text">18:00-05:00</p>
                    </div>
                    <div className="address">
                      <img className="icon" src={phone} alt="location" />
                      <p className="text">0501 818 189</p>
                    </div>
                  </div>

                  <div className="section">
                    <div className="sectionMeals">
                      <div className="price">
                        <img className="iconMeals" src={hotDishesIcon} alt="hotDishesIcon" />
                        <p className="mealsPrice">~700с</p>
                      </div>
                      <div className="price">
                        <img className="iconMeals" src={salads} alt="salads" />
                        <p className="mealsPrice">~900с</p>
                      </div>
                    </div>

                    <div className="sectionMeals">
                      <div className="price">
                        <img className="iconMeals" src={desserts} alt="desserts" />
                        <p className="mealsPrice">~500с</p>
                      </div>
                      <div className="price">
                        <img className="iconMeals" src={wineIcon} alt="wineIcon" />
                        <p className="mealsPrice">~1000с</p>
                      </div>
                    </div>
                  </div>

                  <div className="rating">
                    <div className="ratingStars">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </div>
                    <p className="ratingTotal">9,5</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default InstitutionSliders;

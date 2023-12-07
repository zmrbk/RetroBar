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
  phone,
  salads,
  slideOne,
  wineIcon,
} from "../../../../../../../assets/mainPage/institutions/institutions";
import { InstitutionGetAllApi } from "../../../../../../../store/features/Institutions/InstitutionsGetAll";
import StarRatings from "../../../../../../../components/startRatings/StarRatings";
import { API } from "../../../../../../../utils/api";
import "./style2.scss";

export interface IInstitution {
  pubname: string;
  pubphotos: string[];
  publogo: string[];
  info: string;
  workinghours: string;
  kitchen: string;
  averagecheck: number;
  service: string;
  website: string;
  location: string[];
  phone: string[];
  rating: number;
}
function InstitutionSliders() {
  const { data = [] } = InstitutionGetAllApi.useFetchInstitutionsGetAllQuery("");
  const institutions = data || [];
  console.log(institutions);

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
        className="institutionSwiper2">
        {institutions.map((item, id) => {
          return (
            <SwiperSlide>
              <div key={id} className="swiper-wrapper2">
                <div className="swiper-slide2">
                  <div className="slide2" onClick={() => navigateToInstitution("/institution")}>
                    <img className="frameImg2" src={slideOne} alt="" />
                    <img className="sliderImg2" src={API + item.pubphotos[0]} alt="" />
                  </div>
                </div>

                <div className="swiper-slide-content2">
                  <div className="section2 price2">
                    <img className="logo2" src={API + item.publogo[0]} alt="logo" />
                    <div>
                      <p className="logoTitle2"></p>
                      <p className="text2">{item.pubname}</p>
                    </div>
                  </div>

                  <div className="section2">
                    <div className="address2">
                      <img className="icon2" src={geotag} alt="location" />

                      <p className="text2">{item.location}</p>
                    </div>
                    <div className="address2">
                      <img className="icon2" src={clock} alt="location" />

                      <p className="text2">{item.workinghours}</p>
                    </div>
                    <div className="address2">
                      <img className="icon2" src={phone} alt="location" />

                      <p className="text2">{item.phone[0]}</p>
                    </div>
                  </div>

                  <div className="section2">
                    <div className="sectionMeals2">
                      <div className="price2">
                        <img className="iconMeals2" src={hotDishesIcon} alt="hotDishesIcon" />
                        <p className="mealsPrice2">~700с</p>
                      </div>
                      <div className="price2">
                        <img className="iconMeals2" src={salads} alt="salads" />
                        <p className="mealsPrice2">~900с</p>
                      </div>
                    </div>

                    <div className="sectionMeals2">
                      <div className="price2">
                        <img className="iconMeals2" src={desserts} alt="desserts" />
                        <p className="mealsPrice2">~500с</p>
                      </div>
                      <div className="price2">
                        <img className="iconMeals2" src={wineIcon} alt="wineIcon" />
                        <p className="mealsPrice2">~{item.averagecheck}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rating2">
                    <StarRatings />
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

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.scss";
import { Pagination, Navigation } from "swiper";

import VideoCoverCard from "../../../../components/videoCover/VideoCoverCard";
import { VideoPageSliderProps } from "../../../../utils/types/videoPage";
import styles from "../videoPage.module.scss";

export default function VideoPageSlider({ videos, setActive }: VideoPageSliderProps) {
  return (
    <div className="videoPageSlider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        centeredSlides={true}
        className="mySwiperVideo"
        breakpoints={{
          500: {
            slidesPerView: 1,
          },

          800: {
            slidesPerView: 3,
          },
        }}>
        {videos.map((item, index) => (
          <SwiperSlide key={index}>
            <div onClick={() => setActive(true)} className={styles.videoCoverCard}>
              <VideoCoverCard title={item.title} imgSrc={item.videoCover} views={item.views} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

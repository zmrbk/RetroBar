import {
  bigStar,
  smallStar,
  smile,
} from "../../../../../assets/mainPage/actualPhotoReports/actualPhotoReports";
import { defaultImg, horizontalImg } from "../../../../../assets/photoPage";
import Button from "../../../../../components/btn/Button";
import PhotosCard from "../../../../../components/photosCard/PhotosCard";

import styles from "./actualPhotoReports.module.scss";

const cardImages = [
  {
    imgSrc: defaultImg,
    id: 2,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    date: "20 мая 2022",
    orientation: "default",
  },
  {
    imgSrc: defaultImg,
    id: 3,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    date: "22 мая 2022",
    orientation: "default",
  },
  {
    imgSrc: defaultImg,
    id: 4,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    date: "26 мая 2022",
    orientation: "default",
  },
  {
    imgSrc: defaultImg,
    id: 5,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    date: "26 мая 2022",
    orientation: "default",
  },
  {
    imgSrc: horizontalImg,
    id: 1,
    title: "PARK EVENTPLACE",
    secondTitle: "ÜN",
    views: 6545,
    pics: 122,
    date: "14 мая 2022",
    orientation: "horizontal",
  },
];

function ActualPhotoReports() {
  return (
    <div className={styles.sectionBg}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Актуальные фотоотчеты</h2>
          <img className={styles.bigStar} src={bigStar} alt="big star" />
          <img className={styles.smallStar} src={smallStar} alt="small star" />
        </div>
        <img className={styles.smile} src={smile} alt="smile" />
        <div className={styles.cards}>
          {cardImages.map((item) => (
            <PhotosCard
              key={item.id}
              img={item.imgSrc}
              title={item.title}
              secondTitle={item.secondTitle}
              views={item.views}
              pics={item.pics}
              date={item.date}
              orientation={item.orientation}
            />
          ))}
        </div>
        <div className={styles.btnAllPhotos}>
          <Button title="Все фото" />
        </div>
      </div>
    </div>
  );
}

export default ActualPhotoReports;

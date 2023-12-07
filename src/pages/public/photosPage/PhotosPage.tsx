import { defaultImg, horizontalImg, verticalImg } from "../../../assets/photoPage";
import PhotosCard from "../../../components/photosCard/PhotosCard";
import TwoEmoji from "../../../components/twoEmoji/TwoEmoji";

import styles from "./photosPage.module.scss";

export const cardImages = [
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
    imgSrc: verticalImg,
    id: 6,
    title: "PINTA PUB",
    secondTitle: "АБДЫШ АТА",
    views: 709,
    pics: 144,
    date: "14 мая 2022",
    orientation: "vertical",
  },
  {
    imgSrc: horizontalImg,
    id: 7,
    title: "PARK EVENTPLACE",
    secondTitle: "ÜN",
    views: 6545,
    pics: 122,
    date: "14 мая 2022",
    orientation: "horizontal",
  },
  {
    imgSrc: defaultImg,
    id: 15,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    date: "26 мая 2022",
    orientation: "default",
  },
  {
    imgSrc: defaultImg,
    id: 8,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    date: "26 мая 2022",
    orientation: "default",
  },
  {
    imgSrc: defaultImg,
    id: 9,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    date: "26 мая 2022",
    orientation: "default",
  },
  {
    imgSrc: defaultImg,
    id: 10,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    date: "26 мая 2022",
    orientation: "default",
  },
  {
    imgSrc: verticalImg,
    id: 11,
    title: "PABLO",
    secondTitle: "TUESDAY",
    views: 709,
    pics: 144,
    date: "14 мая 2022",
    orientation: "vertical",
  },
  {
    imgSrc: horizontalImg,
    id: 12,
    title: "PARK EVENTPLACE",
    secondTitle: "ÜN",
    views: 6545,
    pics: 122,
    date: "14 мая 2022",
    orientation: "horizontal",
  },
];

function PhotosPage() {
  return (
    <div className={styles.photosPage}>
      <div className={styles.container}>
        <h1>Актуальные фотоотчеты</h1>
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
      </div>
      <TwoEmoji />
    </div>
  );
}

export default PhotosPage;

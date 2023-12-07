import { useState } from "react";

import { eye, pic } from "../../assets/photoPage";
import PhotosCardModal from "../photosCardModal/PhotosCardModal";

import "./styles.scss";

export interface photosCardProps {
  img: string;
  title: string;
  secondTitle: string;
  views: number;
  pics: number;
  date: string;
  orientation: string;
}

function PhotosCard({ img, title, secondTitle, views, pics, date, orientation }: photosCardProps) {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <div onClick={() => setActiveModal(true)} className={`card ${orientation}`}>
        <img className="cardImage" src={img} alt="" />
        <div className="cardText">
          <h4>{title}</h4>
          <span>{secondTitle}</span>
          <div className={`bottomText ${orientation}Text`}>
            <div className="views">
              <img src={eye} alt="views" />
              <span>{views}</span>
              <img src={pic} alt="pics" />
              <span>{pics}</span>
            </div>
            <span className="date">{date}</span>
          </div>
        </div>
      </div>
      <PhotosCardModal
        active={activeModal}
        setActive={setActiveModal}
        img={img}
        title={title}
        secondTitle={secondTitle}
      />
    </>
  );
}

export default PhotosCard;

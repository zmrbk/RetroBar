import { useState } from "react";

import { calendar, mainHeaderBg } from "../../../assets/mainPage/headerSlider/headerSlider";
import TwoEmoji from "../../../components/twoEmoji/TwoEmoji";
import CalendarModal from "../calendarPage/CalendarPage";

import ActualPhotoReports from "./components/actualPhotoReports/ActualPhotoReports";
import BookNow from "./components/bookNow/BookNow";
import TopInstitutions from "./components/headerSlider/components/topInstitutions/TopInstitutions";
import HeaderSlider from "./components/headerSlider/HeaderSlider";
import Institutions from "./components/institutions/Institutions";
import styles from "./mainPage.module.scss";

function MainPage() {
  const [activeModal, setActiveModal] = useState(false);
  const handleClick = () => {
    setActiveModal(true);
  };

  return (
    <div className={styles.mainContent}>
      <div>
        <img className={styles.mainBg} src={mainHeaderBg} alt="" />
      </div>
      <HeaderSlider />
      <div className={styles.calendar}>
        <img src={calendar} alt="calendar" onClick={handleClick} />
      </div>
      <CalendarModal activeModal={activeModal} setActiveModal={setActiveModal} />
      <TopInstitutions />
      <ActualPhotoReports />
      <Institutions />
      <BookNow />
      <TwoEmoji />
    </div>
  );
}

export default MainPage;

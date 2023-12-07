import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./calendarPage.css";
import Calendar from "react-calendar";
import dayjs from "dayjs";

import { searchIcon } from "../../../assets/header/header";
import { mainVideoCover, videoCoverImg } from "../../../assets/videoPage";
import { eye, pic } from "../../../assets/photoPage";

const cardImages = [
  {
    imgSrc: videoCoverImg,
    id: 2,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    start: "2022-09-19",
  },
  {
    imgSrc: videoCoverImg,
    id: 3,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    start: "2022-09-11",
  },
  {
    imgSrc: videoCoverImg,
    id: 4,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    start: "2022-09-30",
  },
  {
    imgSrc: mainVideoCover,
    id: 5,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    start: "2022-09-26",
  },
  {
    imgSrc: videoCoverImg,
    id: 5,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    start: "2022-09-26",
  },
  {
    imgSrc: videoCoverImg,
    id: 5,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    start: "2022-09-26",
  },
  {
    imgSrc: videoCoverImg,
    id: 5,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    start: "2022-09-26",
  },
];

let dateList: any = [];

cardImages.forEach((item) => {
  dateList.push(item.start);
});

const CalendarModal = ({ activeModal, setActiveModal }: any) => {
  const [date, setDate] = useState(new Date());
  const [sortedList, setSortedList] = useState([
    {
      imgSrc: videoCoverImg,
      title: "",
      secondTitle: "",
      views: 0,
      pics: 0,
      start: "",
    },
  ]);

  useEffect(() => {
    const result = dayjs(date).format("YYYY-MM-DD");
    const newList: any = [];
    cardImages.forEach((item) => {
      if (item.start === result) {
        newList.push(item);
      }
    });
    setSortedList(newList);
  }, [date]);

  return (
    <div className={activeModal ? "modal active" : "modal"} onClick={() => setActiveModal(false)}>
      <div className="top">
        <button className="buttons-active">Светская жизнь</button>
        <button className="buttonsC">Клубы</button>
        <button className="buttonsC">Бары</button>
        <button className="buttonsC">Караоке</button>
      </div>
      <div className="downside">
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="search">
            <input type="text" placeholder="искать..." className="inputCal" />
            <img src={searchIcon} alt="search" className="searchIcon" />
          </div>
          <Calendar
            onChange={setDate}
            value={date}
            className="cal"
            tileClassName={({ date }) =>
              dateList.find((x: any) => x === dayjs(date).format("YYYY-MM-DD")) ? "highlight" : null
            }
          />
        </div>
        <div className="photos">
          {sortedList.map((item, i) => (
            <div key={i} className="innerCardC">
              <div className={"cardC"}>
                <img className={"cardImageC"} src={item.imgSrc} alt="" />
                <div className="cardTextC">
                  <h4>{item.title}</h4>
                  <span>{item.secondTitle}</span>
                  <div className={"bottomTextC "}>
                    <div className="viewsC">
                      <img src={eye} alt="views" />
                      <span>{item.views}</span>
                      <img src={pic} alt="pics" />
                      <span>{item.pics}</span>
                    </div>
                    <span className="dateC">{item.start}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CalendarModal;

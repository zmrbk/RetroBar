import AdminMenu from "../../UI/adminMenu/AdminMenu";
import EditMenu from "../../UI/EditMenu/EditMenu";
import classes from "../../../adminPage.module.scss";
import { defaultImg, eye, horizontalImg, pic } from "../../../../../../assets/photoPage";
import "./EditCurrentPhotos.scss";
import { ChangeButton, DeleteButton } from "../../../constants";

const cardImages = [
  {
    eventphotos: defaultImg,
    id: 2,
    pubname: "ZEPPELIN BAR",
    eventname: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    date: "20 мая 2022",
  },
  {
    imgSrc: defaultImg,
    id: 3,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    date: "22 мая 2022",
  },
  {
    imgSrc: defaultImg,
    id: 4,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    date: "26 мая 2022",
  },
  {
    imgSrc: defaultImg,
    id: 5,
    title: "ZEPPELIN BAR",
    secondTitle: "STREET CREDIBILITY",
    views: 709,
    pics: 144,
    date: "26 мая 2022",
  },
  {
    imgSrc: horizontalImg,
    id: 1,
    title: "PARK EVENTPLACE",
    secondTitle: "ÜN",
    views: 6545,
    pics: 122,
    date: "14 мая 2022",
  },
];

const EditCurrent = () => {
  return (
    <div className={classes.containerParent}>
      <AdminMenu />
      <div className={classes.editContainer}>
        <h2>Изменить</h2>
        <EditMenu />
        <div className="editCurrentCards">
          {cardImages.map((item) => (
            <div className="innerCard">
              <div className={`card }`}>
                <img className={"cardImage"} src={item.imgSrc} alt="" />
                <div className="cardText">
                  <h4>{item.title}</h4>
                  <span>{item.secondTitle}</span>
                  <div className={`bottomText `}>
                    <div className="views">
                      <img src={eye} alt="views" />
                      <span>{item.views}</span>
                      <img src={pic} alt="pics" />
                      <span>{item.pics}</span>
                    </div>
                    <span className="date">{item.date}</span>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button className="edButton">{ChangeButton}</button>
                <button className="delButton">{DeleteButton}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditCurrent;

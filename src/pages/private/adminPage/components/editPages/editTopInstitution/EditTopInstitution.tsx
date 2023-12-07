import AdminMenu from "../../UI/adminMenu/AdminMenu";
import EditMenu from "../../UI/EditMenu/EditMenu";
import classes from "../../../adminPage.module.scss";
import {
  filmClock,
  filmFrame,
  filmGeotag,
  filmPhone,
  photoBarOne,
  photoBarThree,
  photoBarTwo,
} from "../../../../../../assets/mainPage/headerSlider/headerSlider";
import { ChangeButton, DeleteButton } from "../../../constants";
import "./editTopInstituion.scss";

interface ITopInstitutionSlider {
  id: number;
  photo: string;
}

const topInstitutionSliders: ITopInstitutionSlider[] = [
  {
    id: 1,
    photo: photoBarOne,
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

const EditTopInstitution = () => {
  return (
    <div className={classes.containerParent}>
      <AdminMenu />
      <div className={classes.editContainer}>
        <h2>Изменить</h2>
        <EditMenu />
        <div className="editTopInstCards">
          {topInstitutionSliders.map((item) => {
            return (
              <>
                <div className="editfilmContent">
                  <div className="editfilmSlide">
                    <div className="editfilmSlideFrameBlock">
                      <img className="editfilmSlideFrame" src={filmFrame} alt="filmFrame" />
                    </div>
                    <div className="editfilmSlidePhotoBlock">
                      <img className="editfilmSlidePhoto" src={item.photo} alt="sliderPhoto" />
                      <div className="editfilmSlidePhotoContent">
                        <div className="editfilmTitle">MINIBAR</div>
                        <div className="editfilmAddress">
                          <img className="editfilmAddressIcon" src={filmClock} alt="clockIcon" />
                          <p>18:00-06:00</p>
                        </div>
                        <div className="editfilmAddress">
                          <img className="editfilmAddressIcon" src={filmPhone} alt="phoneIcon" />
                          <p>0 558 55 00 00</p>
                        </div>
                        <div className="editfilmAddress">
                          <img className="editfilmAddressIcon" src={filmGeotag} alt="geotagIcon" />
                          <p>Чынгыза Айтматова, 56</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="edButton">{ChangeButton}</button>
                    <button className="delButton">{DeleteButton}</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EditTopInstitution;

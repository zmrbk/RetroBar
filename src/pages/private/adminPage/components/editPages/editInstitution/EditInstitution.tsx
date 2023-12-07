import AdminMenu from "../../UI/adminMenu/AdminMenu";
import EditMenu from "../../UI/EditMenu/EditMenu";
import classes from "../../../adminPage.module.scss";
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
} from "../../../../../../assets/mainPage/institutions/institutions";
import "./editInstitutions.scss";

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

const EditInstitution = () => {
  return (
    <div className={classes.containerParent}>
      <AdminMenu />
      <div className={classes.editContainer}>
        <h2>Изменить</h2>
        <EditMenu />
        <div className="editInstCards">
          {sliderImg.map((item, id) => {
            return (
              <div key={id} className="editswiper-wrapper">
                <div className="editswiper-slide">
                  <div className="editslide">
                    <img className="editframeImg" src={item.frame} alt="" />
                    <img className="editsliderImg" src={item.image} alt="" />
                  </div>
                </div>

                <div className="editswiper-slide-content">
                  <div className="editsection price">
                    <img className="editlogo" src={logoKeanu} alt="logo" />
                    <div>
                      <p className="editlogoTitle">KEANU</p>
                      <p className="edittext">Bar</p>
                    </div>
                  </div>

                  <div className="editsection">
                    <div className="editaddress">
                      <img className="editicon" src={geotag} alt="location" />
                      <p className="edittext">Манаса 28</p>
                    </div>
                    <div className="editaddress">
                      <img className="editicon" src={clock} alt="location" />
                      <p className="edittext">18:00-05:00</p>
                    </div>
                    <div className="editaddress">
                      <img className="editicon" src={phone} alt="location" />
                      <p className="edittext">0501 818 189</p>
                    </div>
                  </div>

                  <div className="editsection">
                    <div className="editsectionMeals">
                      <div className="editprice">
                        <img className="editiconMeals" src={hotDishesIcon} alt="hotDishesIcon" />
                        <p className="editmealsPrice">~700с</p>
                      </div>
                      <div className="editprice">
                        <img className="editiconMeals" src={salads} alt="salads" />
                        <p className="editmealsPrice">~900с</p>
                      </div>
                    </div>

                    <div className="editsectionMeals">
                      <div className="editprice">
                        <img className="editiconMeals" src={desserts} alt="desserts" />
                        <p className="editmealsPrice">~500с</p>
                      </div>
                      <div className="editprice">
                        <img className="editiconMeals" src={wineIcon} alt="wineIcon" />
                        <p className="editmealsPrice">~1000с</p>
                      </div>
                    </div>
                  </div>

                  <div className="editrating">
                    <div className="editratingStars">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </div>
                    <p className="editratingTotal">9,5</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EditInstitution;

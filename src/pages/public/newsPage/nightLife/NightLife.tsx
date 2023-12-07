import { NavLink } from "react-router-dom";

import photo from "../assets/photo (5).png";
import photo2 from "../assets/photoparty.png";
import photo3 from "../assets/imagerapper.png";
import photo4 from "../assets/sax.png";
import tape from "../assets/tape.png";
import tape2 from "../assets/tapeblack.png";
import smile from "../assets/emoji (1).svg";
import arrow from "../assets/arrow up (1).svg";
import picture from "../assets/picture (1).svg";
import eye from "../assets/eye (1).svg";

import styles from "./nightLife.module.scss";

function NightLife() {
  function scrollTop(): void {
    window.scrollTo({ top: 20, behavior: "smooth" });
  }
  const info = [
    {
      photo: [
        {
          photo1: photo,
          photo2: photo2,
          photo3: photo3,
          photo4: photo4,
          tape: tape,
        },
      ],
      main: [{ main1: "PARK EVENTPLACE" }, { main2: "SUSHI ROOM" }],
      title: [
        { title1: "UN" },
        { title2: "ОТКРЫТИЕ ЛЕТНЕЙ ТЕРРАСЫ" },
        { title3: "SUZIE WONG / OPENING | MOT" },
      ],
      prosmotr: [{ prosmotr1: "709" }],
      image: [{ image1: "144" }],
      data: [{ data1: "20 мая 2022" }],
      picture: picture,
      eye: eye,
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Ночная жизнь</h1>
      {info.map((item) => (
        <div className={styles.main}>
          <img className={styles.tape2} src={tape2} alt="" />
          <div className={styles.block}>
            <div className={styles.picture}>
              <img className={styles.pictureFun} src={item.photo[0].photo1} alt="" />

              <div className={styles.title}>
                <h3 className={styles.maino}>{item.main[0].main1}</h3>
                <h5>{item.title[1].title2}</h5>
                <img src={eye} alt="" />
                <span className={styles.pros}>{item.prosmotr[0].prosmotr1}</span>
                <img src={picture} alt="" />
                <span className={styles.pros}>{item.image[0].image1}</span>
              </div>
              <div className={styles.gradient}></div>
            </div>{" "}
            <div className={styles.picture}>
              <img className={styles.pictureFun} src={item.photo[0].photo2} alt="" />

              <div className={styles.title}>
                <h3>{item.main[0].main1}</h3>
                <h5>{item.title[1].title2}</h5>
                <img src={eye} alt="" />
                <span className={styles.pros}>{item.prosmotr[0].prosmotr1}</span>
                <img src={picture} alt="" />
                <span className={styles.pros}>{item.image[0].image1}</span>
              </div>
              <div className={styles.gradient}></div>
            </div>{" "}
            <div className={styles.picture}>
              <img className={styles.pictureFun} src={item.photo[0].photo3} alt="" />

              <div className={styles.title}>
                <h3>{item.main[0].main1}</h3>
                <h5>{item.title[1].title2}</h5>
                <img src={eye} alt="" />
                <span className={styles.pros}>{item.prosmotr[0].prosmotr1}</span>
                <img src={picture} alt="" />
                <span className={styles.pros}>{item.image[0].image1}</span>
              </div>
              <div className={styles.gradient}></div>
            </div>{" "}
            <div className={styles.picture}>
              <img className={styles.pictureFun} src={item.photo[0].photo4} alt="" />

              <div className={styles.title}>
                <h3>{item.main[0].main1}</h3>
                <h5>{item.title[1].title2}</h5>
                <img src={eye} alt="" />
                <span className={styles.pros}>{item.prosmotr[0].prosmotr1}</span>
                <img src={picture} alt="" />
                <span className={styles.pros}>{item.image[0].image1}</span>
              </div>
              <div className={styles.gradient}></div>
            </div>
          </div>
          <img className={styles.tape1} src={tape} alt="" />
        </div>
      ))}
      <div className={styles.trash}>
        <NavLink className={styles.see} to="/">
          {" "}
          Смотреть еще
        </NavLink>
        <img className={styles.smile} src={smile} alt="" />
      </div>
      <img onClick={scrollTop} src={arrow} className={styles.arrow} alt="" />
    </div>
  );
}

export default NightLife;

import { Link } from "react-router-dom";

import {
  imgBg,
  innerImgBg,
  mailIcon,
  mainPhoto,
  phone,
  photoFirst,
  scotchLeftBottom,
  scotchLeftTop,
  scotchRightTop,
  sketch,
  whatsapp,
} from "../../../assets/contactsPage";

import styles from "./contactsPage.module.scss";

function ContactsPage() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.images}>
          <div className={styles.mainImg}>
            <img className={styles.mainImgBg} src={imgBg} alt="" />
            <img className={styles.innerImg} src={mainPhoto} alt="mainPhoto" />
            <img className={styles.scotchLeftTop} src={scotchLeftTop} alt="" />
            <img className={styles.scotchLeftBottom} src={scotchLeftBottom} alt="" />
            <img className={styles.scotchRightTop} src={scotchRightTop} alt="" />
          </div>
          <div className={`${styles.defaultImages} ${styles.firstDefaultImage}`}>
            <div className={`${styles.defaultImage} ${styles.firstDefaultImage}`}>
              <img className={styles.defaultImgBg} src={innerImgBg} alt="" />
              <img className={styles.defaultImgInner} src={photoFirst} alt="" />
              <img className={styles.scotchDefault} src={scotchLeftBottom} alt="" />
            </div>
            <div className={`${styles.defaultImage} ${styles.secondDefaultImage}`}>
              <img className={styles.defaultImgBg} src={innerImgBg} alt="" />
              <img className={styles.defaultImgInner} src={photoFirst} alt="" />
              <img className={styles.scotchDefault} src={scotchLeftBottom} alt="" />
            </div>
            <div className={`${styles.defaultImage} ${styles.thirdDefaultImage}`}>
              <img className={styles.defaultImgBg} src={innerImgBg} alt="" />
              <img className={styles.defaultImgInner} src={photoFirst} alt="" />
              <img className={styles.scotchDefault} src={scotchLeftBottom} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.aboutUs}>
          <div className={styles.aboutUsHeader}>
            <h4>О нас</h4>
            <img src={sketch} alt="" />
            <p>
              Медиа ресурс о светской, вечерней и ночной жизни города. Место, куда заходят чтоб
              почувствовать и быть в курсе всех событий в культурной жизни столицы.
            </p>
          </div>
          <div className={styles.aboutUsContacts}>
            <h4>Заказ фото/видео репортажа:</h4>
            <div className={styles.contactNumbers}>
              <div>
                <img src={phone} alt="" />
                <a href="tel:+996 558 55 00 00">
                  <span>0 558 55 00 00</span>
                </a>
              </div>
              <div>
                <img src={whatsapp} alt="" />
                <Link to="/">
                  <span>0 558 55 00 00</span>
                </Link>
              </div>
              <div>
                <img src={mailIcon} alt="" />
                <a href="mailto:info@foodzero.com">
                  <span>info@foodzero.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;

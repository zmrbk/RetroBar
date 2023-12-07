import { Link } from "react-router-dom";

import { phone } from "../../../assets/contactsPage";
import { instagram } from "../../../assets/footer/footer";
import { clock, dish, geotag, meaning, money } from "../../../assets/institutionBar-slider";
import { events, logoBar, picture } from "../../../assets/instutionPage";
import StarRatings from "../../../components/startRatings/StarRatings";
import TwoEmoji from "../../../components/twoEmoji/TwoEmoji";
import { InstitutionGetBarApi } from "../../../store/features/institutionBarPage/InstitutionBarPage";

import Slider from "./components/InstitutionBarSlider/institutionBarSlider";
import Reportage from "./components/reportage";
import styles from "./institutionPage.module.scss";

function InstitutionPage() {
  const breadCrumbs = [
    {
      title: "Топ заведения",
      link: "/",
    },
    {
      title: "Заведения",
      link: "/",
    },
    {
      title: "Геолокация",
      link: "/",
    },
  ];

  return (
    <div className={styles.institutionPage}>
      <div className={styles.container}>
        <div className={styles.breadCrumbs}>
          {breadCrumbs.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className={styles.institutionPageContent}>
          <h4>Заведения/LIVEBAR</h4>
          <div className={styles.aboutBar}>
            <div className={styles.contentLeft}>
              <div className={styles.contentHeader}>
                <img src={logoBar} alt="" />
                <div className={styles.barName}>
                  <h3>LIVEBAR</h3>
                  <div className={styles.innerInf}>
                    <div>
                      <img src={picture} alt="" />
                      150
                    </div>
                    <div>
                      <img src={events} alt="" />
                      150
                    </div>
                  </div>
                </div>
                <div className={styles.starRating}>
                  <StarRatings />
                </div>
              </div>
              <div className={styles.aboutBarText}>
                <p>
                  LiveBar, работая в ресторанной сфере уже свыше 11-ти лет является именем
                  нарицательным. Несмотря на внушительную базу постоянных гостей мы неустанно
                  работаем над привлечением новых адептов нашей концепции.
                </p>
                <p>
                  Великолепный интерьер LiveBar с множеством оригинальных деталей дарит каждому
                  гостю ощущение комфорта и настраивает на творческий подход… Уютная атмосфера
                  обеспечивается своеобразным дизайном, хорошим музыкальным сопровождением и
                  вниманием обходительного персонала. Разнообразные кухонное, барное, винное и
                  кальянное меню заточены как под pre-party и after-party постоянных гостей так и
                  под утончённых гурманов. Профессиональное караоке оборудование собрано из
                  продукции лучших брендов производителей аудио оборудования и настроено
                  профессионалами.
                </p>
                <p>
                  Лучше один раз увидеть, чем 100 раз прочитать или услышать! Приходите и ощутите
                  уникальную ауру наших заведений!
                </p>
              </div>
            </div>
            <div className={styles.contentRight}>
              <Slider />
            </div>
          </div>
          <div className={styles.barLocation}>
            <div className={styles.map}>
              <iframe
                title="Location of bar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.933818344825!2d74.58956241472804!3d42.874241010468225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec820eb29c581%3A0x5465303004c4f42b!2zNzkg0YPQuy4g0JjRgdCw0L3QvtCy0LAsINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1662441041563!5m2!1sru!2skg"
                loading="lazy"></iframe>
            </div>
            <div className={styles.barDescribe}>
              <div className={styles.describe}>
                <h2>Описание:</h2>
                <ul>
                  <li>
                    <img src={clock} alt="" />
                    18:00 - 06:00
                  </li>
                  <li>
                    <img src={money} alt="" />
                    Средний чек: 1000 сом
                  </li>
                  <li>
                    <img src={dish} alt="" />
                    Европейская кухня
                  </li>
                  <li>
                    <img src={meaning} alt="" />
                    Ночной клуб, караоке
                  </li>
                </ul>
              </div>
              <div className={styles.contacts}>
                <h2>Контакты:</h2>
                <ul>
                  <li>
                    <img src={instagram} alt="" />
                    livebar.kg
                  </li>
                  <li>
                    <img src={phone} alt="" />0 558 55 00 00
                  </li>
                  <li>
                    <img src={geotag} alt="" />
                    ТЦ «МОТО» 5 этаж (Токтогула Советская)
                  </li>
                  <li>
                    <img src={phone} alt="" />
                    0557 594999
                  </li>
                  <li>
                    <img src={geotag} alt="" />
                    Ул. Кулатова 8/1 LiveBar Coolatova
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reportage />
      <TwoEmoji />
    </div>
  );
}

export default InstitutionPage;

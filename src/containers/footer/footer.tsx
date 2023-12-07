import { Link } from "react-router-dom";

import { instagram, telegram, youtube } from "../../assets/footer/footer";
import { logo } from "../../assets/header/header";
import Search from "../../components/search/search";

import { FOOTER_LINKS1, FOOTER_LINKS2 } from "./constants";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.content__staticInformation}>
          <Link to="/">
            <div className={styles.headerLogo}>
              <span>Retro</span>
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <div className={styles.spans}>
            <span>Политика конфиденциальности</span>
            <span>Copyright © 2021 </span>
            <span style={{ marginTop: "13px" }}>Digital-агентство «Active Trust»</span>
          </div>
        </div>
        <div className={styles.content__navigation}>
          <ul>
            {FOOTER_LINKS1.map((item) => (
              <Link key={item.id} to={item.link}>
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className={styles.content__navigation}>
          <ul>
            {FOOTER_LINKS2.map((item) => (
              <Link key={item.id} to={item.link}>
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className={styles.content__socialMedias}>
          <Search widthStyle="225px" placeholder="Поиск" positionRight="0" />
          <span>Мы в социальных сетях:</span>
          <div className={styles.socialMedias}>
            <a href="/" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" />
            </a>
            <a
              href="https://www.instagram.com/discovery_studio_org/"
              target="_blank"
              rel="noreferrer">
              <img src={instagram} alt="telegram" />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import { instagram, telegram, youtube } from "../../assets/footer/footer";
import { logo, mail, searchIcon } from "../../assets/header/header";
import Search from "../../components/search/search";

import { HEADER_LINKS } from "./constans";
import styles from "./header.module.scss";

function Header() {
  const [activeIndex, setActiveIndex] = useState(10);
  const [activeSearch, setActiveSearch] = useState(false);
  const [open, setOpen] = useState(false);

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <Link onClick={() => setActiveIndex(10)} to="/">
          <div className={styles.headerLogo}>
            <span>Retro</span>
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <ul>
          {HEADER_LINKS.map((item, index) => (
            <Link key={item.id} to={item.link}>
              <li
                onClick={() => setActiveIndex(index)}
                className={activeIndex === index ? styles.active : ""}>
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <button className={styles.searchIcon} onClick={() => setActiveSearch(!activeSearch)}>
          <img src={searchIcon} alt="searchIcon" />
        </button>
      </div>
      <div className={styles.searchBlock}>
        {activeSearch && <Search placeholder="Поиск" widthStyle="360px" positionRight="0" />}
      </div>
      <Link onClick={() => setOpen(false)} className={styles.logoDiv} to="/">
        <div className={styles.headerLogo}>
          <span className={styles.retro}>Retro</span>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className={styles.burgerIcon}>
        {open ? (
          <AiOutlineClose fontSize="24px" color="white" onClick={() => setOpen(!open)} />
        ) : (
          <GiHamburgerMenu fontSize="24px" color="white" onClick={() => setOpen(!open)} />
        )}
      </div>
      {open && (
        <motion.div initial={animateFrom} animate={animateTo} className={styles.mobileHeader}>
          <div className={styles.mobileHeaderContent}>
            <div className={styles.mobileSearch}>
              <Search placeholder="Поиск" widthStyle="250px" positionRight="0" />
            </div>
            <ul>
              {HEADER_LINKS.map((item, index) => (
                <Link onClick={() => setOpen(false)} key={item.id} to={item.link}>
                  <li>{item.title}</li>
                </Link>
              ))}
            </ul>
            <div className={styles.socialMedias}>
              <span>Мы в социальных сетях:</span>
              <div className={styles.mediaIcons}>
                <a href="/" target="_blank" rel="noreferrer">
                  <img src={telegram} alt="telegram" />
                </a>
                <a
                  href="https://www.instagram.com/discovery_studio_org/"
                  target="_blank"
                  rel="noreferrer">
                  <img src={instagram} alt="telegram" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noreferrer">
                  <img src={youtube} alt="youtube" />
                </a>
                <a href="mailto:daskov2412@gmail.com" target="_blank" rel="noreferrer">
                  <img src={mail} alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Header;

import { arrowUp, twoEmoji } from "../../assets/icons/icons";

import styles from "./twoEmoji.module.scss";

function TwoEmoji() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.rollToUp}>
      <img className={styles.twoEmoji} src={twoEmoji} alt="TwoEmojies" />
      <div onClick={scrollUp}>
        <img className={styles.arrowUp} src={arrowUp} alt="ArrowUp" />
      </div>
    </div>
  );
}

export default TwoEmoji;

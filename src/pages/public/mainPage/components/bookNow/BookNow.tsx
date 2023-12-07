import { bookNowImg } from "../../../../../assets/mainPage/bookNow/bookNow";
import Button from "../../../../../components/btn/Button";

import styles from "./bookNow.module.scss";

function BookNow() {
  return (
    <div className={styles.bookNowBg}>
      <div className={styles.bookNowContent}>
        <div className={styles.bookNowLeft}>
          <img className={styles.bookNowImg} src={bookNowImg} alt="background" />
        </div>
        <div className={styles.bookNowRight}>
          <h2 className={styles.title}>Заказать сьёмку сейчас</h2>
          <p className={styles.text}>
            Современные технологии достигли такого уровня, что перспективное планирование
            способствует подготовке и реализации позиций, занимаемых участниками в отношении
            поставленных задач.
          </p>
          <div className={styles.btn}>
            <Button title="Позвонить" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;

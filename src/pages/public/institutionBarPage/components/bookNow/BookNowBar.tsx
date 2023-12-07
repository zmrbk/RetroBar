import { bookNowImg } from "../../../../../assets/mainPage/bookNow/bookNow";
import Button from "../../../../../components/btn/Button";

import styles from "./bookNowBar.module.scss";

function BookNowBar() {
  return (
    <div className={styles.bookNowBg2}>
      <div className={styles.bookNowContent2}>
        <div className={styles.bookNowLeft2}>
          <img className={styles.bookNowImg2} src={bookNowImg} alt="background" />
        </div>
        <div className={styles.bookNowRight2}>
          <h2 className={styles.title2}>Заказать сьёмку сейчас</h2>
          <p className={styles.text2}>
            Современные технологии достигли такого уровня, что перспективное планирование
            способствует подготовке и реализации позиций, занимаемых участниками в отношении
            поставленных задач.
          </p>
          <div className={styles.btn2}>
            <Button title="Позвонить" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNowBar;

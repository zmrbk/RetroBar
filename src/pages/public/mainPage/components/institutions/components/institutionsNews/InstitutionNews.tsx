import { newsImg } from "../../../../../../../assets/mainPage/institutions/institutions";

import styles from "./institutionNews.module.scss";

function InstitutionNews() {
  return (
    <>
      <div className={styles.newsContent}>
        <div className={styles.newsLeftContent}>
          <h2 className={styles.newsTitle}>Новость</h2>
          <p className={styles.newsText}>
            Современные технологии достигли такого уровня, что перспективное планирование
            способствует подготовке и реализации позиций, занимаемых участниками в отношении
            поставленных задач.
          </p>
          <p className={styles.newsDate}>01.04.2022</p>
        </div>
        <img className={styles.newsImg} src={newsImg} alt="NewsImage" />
      </div>
    </>
  );
}

export default InstitutionNews;

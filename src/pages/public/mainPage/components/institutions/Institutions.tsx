import { sketch } from "../../../../../assets/mainPage/institutions/institutions";

import InstitutionSliders from "./components/institutionSliders/InstitutionSliders";
import InstitutionNews from "./components/institutionsNews/InstitutionNews";

import styles from "./institutions.module.scss";

function Institutions() {
  return (
    <div className={styles.sectionBg}>
      <div className={styles.sectionHeader}>
        <img className={styles.sketchTitle} src={sketch} alt="" />
        <div className={styles.title}>Заведения</div>
      </div>
      <InstitutionSliders />
      <InstitutionNews />
    </div>
  );
}

export default Institutions;

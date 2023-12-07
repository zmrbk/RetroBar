import InstitutionSliders2 from "./components/institutionSliders/InstitutionSliders2";
import styles from "./institutionsBar.module.scss";

function InstitutionsBar() {
  return (
    <div className={styles.sectionBg2}>
      <div className={styles.sectionHeader2}>
        <div className={styles.title2}>Заведения</div>
      </div>
      <InstitutionSliders2 />
    </div>
  );
}

export default InstitutionsBar;

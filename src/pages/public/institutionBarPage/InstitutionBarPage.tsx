import { mainHeaderBg } from "../../../assets/mainPage/headerSlider/headerSlider";
import TwoEmoji from "../../../components/twoEmoji/TwoEmoji";
import TopInstitutions from "../mainPage/components/headerSlider/components/topInstitutions/TopInstitutions";

import BookNowBar from "./components/bookNow/BookNowBar";
import InstitutionsBar from "./components/institutions/InstitutionsBar";
import styles from "./institutionBarPage.module.scss";

function InstitutionBarPage() {
  return (
    <div className={styles.mainContent2}>
      <div>
        <img className={styles.mainBg2} src={mainHeaderBg} alt="" />
      </div>
      <TopInstitutions />
      <InstitutionsBar />
      <BookNowBar />
      <TwoEmoji />
    </div>
  );
}

export default InstitutionBarPage;

import InnerSlider from "../innerSlider";
import { photo1, photo2, photo3 } from "../../../../../assets/institutionBar-slider";

import styles from "./styles.module.scss";

const reportageBase = [
  {
    id: 1,
    date: "24 Мая 2022",
    base: [photo1, photo2, photo3],
  },
  {
    id: 2,
    date: "24 Мая 2022",
    base: [photo1, photo2, photo3],
  },
];

function Reportage() {
  return (
    <div className={styles.reportageSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Репортажи</h2>
        {reportageBase.map((item, index) => (
          <div key={index} className={styles.slider}>
            <h2>{item.date}</h2>
            <InnerSlider base={item.base} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reportage;

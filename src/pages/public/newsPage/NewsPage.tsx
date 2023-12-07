import styles from "./newsPage.module.scss";
import SliderMot from "./sliderMot/SliderMot";
import emoji from "./assets/emoji (1).png";
import star from "./assets/star.png";
import NightLife from "./nightLife/NightLife";

function NewsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <p>Личности</p>
        <p>Ночная жизнь</p>
        <p>Событие</p>
        <p>Еда</p>
      </div>
      <div className={styles.page1}>
        <img className={styles.star} src={star} alt="" />
        <img className={styles.emoji} src={emoji} alt="" />
        <div className={styles.container}>
          <div className={styles.forslider}>
            <h1 className={styles.af}>Афиша</h1>
            <SliderMot />
          </div>
        </div>
      </div>
      <div className={styles.page2}>
        <NightLife />
      </div>
    </div>
  );
}

export default NewsPage;

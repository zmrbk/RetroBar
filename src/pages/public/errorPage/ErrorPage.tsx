import { useNavigate } from "react-router-dom";

import { error404 } from "../../../assets/errorPage/errorPage";
import Button from "../../../components/btn/Button";
import Search from "../../../components/search/search";

import styles from "./errorPage.module.scss";

function ErrorPage() {
  const navigateToMain = useNavigate();

  return (
    <div>
      <div className={styles.errorPage}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.contentLeft}>
              <div className={styles.contentLeftWidth}>
                <h2 className={styles.title}>К сожалению ни чего не удалось найти.</h2>
                <p className={styles.text}>
                  Жаль, но ничего не соответствуют критериям поиска. Пожалуйста, попробуйте снова,
                  изменив ключевые слова.
                </p>

                <div className={styles.search}>
                  <Search widthStyle={"100%"} placeholder={"твиттер"} positionRight={"10px"} />
                </div>

                <div onClick={() => navigateToMain("/")} className={styles.btnToMain}>
                  <Button title="На главную" />
                </div>
              </div>
            </div>
            <div className={styles.contentRight}>
              <img className={styles.imageError} src={error404} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;

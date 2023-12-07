import { useState } from "react";

import { Advertisement, Poster } from "../../../../constants";
import { PosterForm } from "../poster/PosterForm";
import { AdvertisementForm } from "../advertisement/AdvertisementForm";

import styles from "./form.module.scss";

export const Form = () => {
  const [activeChoice, setActiveChoice] = useState(Advertisement);
  const handleActiveChoice = (choice: string) => {
    setActiveChoice(choice);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.choice}>
        <h2
          onClick={() => handleActiveChoice(Advertisement)}
          className={activeChoice === Advertisement ? styles.activeChoice : ""}>
          Реклама
        </h2>
        <span>/</span>
        <h2
          onClick={() => handleActiveChoice(Poster)}
          className={activeChoice === Poster ? styles.activeChoice : ""}>
          Афиша
        </h2>
      </div>
      <div className={styles.formDivide}>
        <div className={styles.choosing}>
          {activeChoice === Advertisement && <AdvertisementForm />}
          {activeChoice === Poster && <PosterForm />}
        </div>
      </div>
    </div>
  );
};

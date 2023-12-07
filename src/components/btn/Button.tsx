import { btnProps } from "../../types/button";

import styles from "./button.module.scss";

function Button({ title }: btnProps) {
  return <button className={styles.btn}>{title}</button>;
}

export default Button;

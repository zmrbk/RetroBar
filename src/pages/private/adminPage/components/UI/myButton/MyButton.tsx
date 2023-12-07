import styles from "./MyButton.module.scss";

function Button({ props, onClick }: any) {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        {props}
      </button>
    </>
  );
}

export default Button;

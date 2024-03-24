import styles from "./Input.module.css";

function Input({ type = "text" }) {
  return <input type={type} className={styles["input"]} />;
}

export default Input;

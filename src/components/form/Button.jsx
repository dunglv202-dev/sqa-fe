import styles from "./Button.module.css";

function Button({ type = "button", label, onClick }) {
  return (
    <button type={type} className={styles["button"]} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;

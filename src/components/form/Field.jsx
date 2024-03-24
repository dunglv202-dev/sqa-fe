import { useId } from "react";
import styles from "./Field.module.css";

function Field({ label, children }) {
  const fieldId = useId();

  return (
    <div>
      <label htmlFor={fieldId} className={styles["label"]}>
        {label}
      </label>
      <div id={fieldId} className={styles["field"]}>
        {children}
      </div>
    </div>
  );
}

export default Field;

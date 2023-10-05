import { FaCrown } from "react-icons/fa";

import styles from "./styles.module.css";

const Button = () => {
  return (
    <button className={styles.button}>
      GI-GRO
      <FaCrown className={styles.icon} />P
    </button>
  );
};

export default Button;

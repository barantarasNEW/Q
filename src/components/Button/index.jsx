import { FaCrown } from "react-icons/fa";

import styles from "./styles.module.css";

const Button = () => {
  return (
    <button className={styles.button}>
      GI-GRO
      <FaCrown size={14} />P
    </button>
  );
};

export default Button;

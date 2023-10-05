import { BiAnchor } from "react-icons/bi";

import styles from "./styles.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <BiAnchor className={styles.icon} />

      <div className={styles.textContainer}>
        <p className={styles.text}>R44 - #FORYOU</p>
        <p className={styles.text}>TOR V5.0</p>
        <p className={styles.text}>ALGO-GI</p>
      </div>

      <BiAnchor className={styles.icon} />
    </div>
  );
};

export default Logo;

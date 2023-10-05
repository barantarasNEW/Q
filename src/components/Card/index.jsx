import { ImArrowRight } from "react-icons/im";
import { FaCircle } from "react-icons/fa";

import Button from "../Button";
import Logo from "../Logo";
import styles from "./card.module.css";

const Card = ({ card: { win4, win6, win16 } }) => {
  return (
    <div className={styles.card}>
      <Logo />

      <div className={styles.textContainer}>
        <p className={styles.text}>
          <span>Celkovy timing WIN-série</span>
          <ImArrowRight className={styles.icon} />
          <span className={styles.value}>04:20:30</span>
        </p>
        <p className={styles.text}>
          <span>Celkovy pocet WIN-situaci</span>
          <ImArrowRight className={styles.icon} />
          <span className={styles.value}>3</span>
        </p>
        <p className={styles.text}>
          <span>Celkov pocet 4X pojistek</span>
          <ImArrowRight className={styles.icon} />
          <span className={styles.value}>{win4}</span>
        </p>
        <p className={styles.text}>
          <span>Celkov pocet 7X pojistek</span>
          <ImArrowRight className={styles.icon} />
          <span className={styles.value}>{win6}</span>
        </p>
        <p className={styles.text}>
          <span>Celkov pocet 16X pojistek</span>
          <ImArrowRight className={styles.icon} />
          <span className={styles.value}>{win16}</span>
        </p>
        <p className={styles.text}>
          <span>Úroven rizika WIN-série</span>{" "}
          <ImArrowRight className={styles.icon} />
          <span className={styles.value}>
            Vyhovujici <FaCircle size={15} color="white" />
          </span>
        </p>
      </div>

      <Button />
    </div>
  );
};

export default Card;

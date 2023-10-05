import { ImArrowRight } from "react-icons/im";

import Button from "../Button";
import Logo from "../Logo";
import styles from "./card.module.css";
import { FaCircle } from "react-icons/fa";

const Card = ({ card: { win4, win6, win16 } }) => {
  return (
    <div className={styles.card}>
      <Logo />

      <div className={styles.textContainer}>
        <p className={styles.text}>
          Celkovy timing WIN-série <ImArrowRight className={styles.icon} />
          <span className={styles.value}>04:20:30</span>
        </p>
        <p className={styles.text}>
          Celkovy pocet WIN-situaci <ImArrowRight className={styles.icon} />
          <span className={styles.value}>3</span>
        </p>
        <p className={styles.text}>
          Celkov pocet 4X pojistek <ImArrowRight className={styles.icon} />{" "}
          <span className={styles.value}>{win4}</span>
        </p>
        <p className={styles.text}>
          Celkov pocet 7X pojistek <ImArrowRight className={styles.icon} />{" "}
          <span className={styles.value}>{win6}</span>
        </p>
        <p className={styles.text}>
          Celkov pocet 16X pojistek <ImArrowRight className={styles.icon} />
          <span className={styles.value}>{win16}</span>
        </p>
        <p className={styles.text}>
          Úroven rizika WIN-série <ImArrowRight className={styles.icon} />{" "}
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

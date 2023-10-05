import { data } from "../../data";
import Card from "../Card";
import styles from "./styles.module.css";

const Cards = () => {
  return (
    <ul className={styles.cards}>
      {data.map((value) => (
        <Card card={value} />
      ))}
    </ul>
  );
};

export default Cards;

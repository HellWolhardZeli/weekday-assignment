import { JobDescription } from "../../services/interfaces/jobDescription";
import Card from "../Card/Card";
import styles from "./CardList.module.scss";

interface CardListProps {
  list: JobDescription[];
  totalCount: number;
}

const CardList: React.FC<CardListProps> = () => {
  return (
    <div className={styles.root}>
      <Card />
    </div>
  );
};

export default CardList;

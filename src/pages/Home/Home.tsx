import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import styles from "./Home.module.scss";
import { fetchData } from "../../services/api";
import {
  JdListResponse,
  JobDescription,
} from "../../services/interfaces/jobDescription";
const Home = () => {
  const [jdList, setJdList] = useState<JobDescription[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const fetchJdData = async () => {
    const { jdList = [], totalCount = 0 } =
      (await fetchData()) as JdListResponse;
    setTotalCount(totalCount);
    setJdList(jdList);
  };
  useEffect(() => {
    fetchJdData();
  });

  return (
    <div className={styles.root}>
      <div className={styles.container}>Filters</div>
      <div>
        <CardList list={jdList} totalCount={totalCount} />
      </div>
    </div>
  );
};

export default Home;

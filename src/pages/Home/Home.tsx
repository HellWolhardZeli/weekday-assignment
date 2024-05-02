import SearchBox from "../../component/SearchBox/SearchBox";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div className={styles.root}>
      <SearchBox />
    </div>
  );
};

export default Home;

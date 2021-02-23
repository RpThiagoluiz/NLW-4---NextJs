import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

//Styles
import styles from "../styles/pages/Home.module.css";

const Home = () => (
  <div className={styles.container}>
    <ExperienceBar />
    <section>
      <div>
        <Profile />
      </div>
      <div></div>
    </section>
  </div>
);

export default Home;

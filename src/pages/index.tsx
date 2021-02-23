import CompletedChallenges from "../components/CompletedChallenges";
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
        <CompletedChallenges />
      </div>
      <div></div>
    </section>
  </div>
);

export default Home;

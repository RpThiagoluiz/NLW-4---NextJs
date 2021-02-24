import CompletedChallenges from "../components/CompletedChallenges";
import Head from "next/head";

import ChallengeBox from "../components/ChallengeBox";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

//Styles
import styles from "../styles/pages/Home.module.css";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title> Inicio | MoveIt - Next JS</title>
    </Head>
    <ExperienceBar />
    <section>
      <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
      </div>
      <div>
        <ChallengeBox />
      </div>
    </section>
  </div>
);

export default Home;

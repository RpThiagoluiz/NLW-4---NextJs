import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

//Styles
import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/RpThiagoluiz.png" alt="Thiago Luiz" />
      <div>
        <strong>Thiago Luiz</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;

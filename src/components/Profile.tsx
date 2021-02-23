//Styles
import styles from "../styles/components/Profile.module.css";

const Profile = () => (
  <div className={styles.profileContainer}>
    <img src="https://github.com/RpThiagoluiz.png" alt="Thiago Luiz" />
    <div>
      <strong>Thiago Luiz</strong>
      <p>
        <img src="icons/level.svg" alt="level" />
        level 1
      </p>
    </div>
  </div>
);

export default Profile;

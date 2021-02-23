//Styles
import styles from "../styles/pages/Profile.module.css";

const Profile = () => (
  <div className={styles.profileContainer}>
    <img src="https://github.com/RpThiagoluiz.png" alt="Thiago Luiz" />
    <div>
      <strong>Thiago Luiz</strong>
      <p>level 1</p>
    </div>
  </div>
);

export default Profile;

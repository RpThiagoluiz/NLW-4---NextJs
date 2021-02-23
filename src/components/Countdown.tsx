//Styles
import styles from "../styles/components/Countdown.module.css";

const Countdown = () => (
  <div>
    <div className={styles.countdownContainer}>
      <div>
        <span>2</span>
        <span>5</span>
      </div>
      <span>:</span>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </div>
    <button type="button" className={styles.countdownButton}>
      Inicar um ciclo
    </button>
  </div>
);
export default Countdown;
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

//Styles
import styles from "../styles/components/ChallengeBox.module.css";

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);
  //Quando n'ao tem ele retorna null e ja cai no caso n'ao ativo.

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengNotActive}>
          <strong>Finalize um ciclo para receber um desafio.</strong>
          <p>
            <img src="icons/level-up.svg" alt="Leve Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
};
export default ChallengeBox;
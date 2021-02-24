import { ChallengesProvider } from "../contexts/ChallengesContext";
//Styles
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
};

export default MyApp;

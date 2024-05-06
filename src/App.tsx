import Header from "./components/Header/Header";
import styles from "./App.module.css";
import HeroSection from "./components/HeroSection/HeroSection";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <HeroSection/>
    </div>
  );
};

export default App;

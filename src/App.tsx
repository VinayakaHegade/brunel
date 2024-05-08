import Header from "./components/Header/Header";
import styles from "./App.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
import FAQSection from "./components/FAQSection/FAQSection";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <HeroSection />
      <FAQSection />
    </div>
  );
};

export default App;

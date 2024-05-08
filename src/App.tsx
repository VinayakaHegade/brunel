import Header from "./components/Header/Header";
import styles from "./App.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
import FAQSection from "./components/FAQSection/FAQSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <HeroSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;

import styles from "./Header.module.css";
import Button from "../Common/Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="./brunel.svg" alt="Brunel Logo" />
      <div className={styles.ctaButtonContainer}>
        <Button variant="secondary">Get Projects</Button>
        <Button variant="primary">Onboard Talent</Button>
      </div>
    </header>
  );
};

export default Header;

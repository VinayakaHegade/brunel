import styles from "./Header.module.css";
import Button from "../Common/Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="./brunel.svg" alt="Brunel Logo" />
      <div className={styles.ctaButtonContainer}>
        <Link to="register" className={styles.secondaryCta}>
          <Button variant="secondary">Get Projects</Button>
        </Link>
        <Button variant="primary">Onboard Talent</Button>
      </div>
    </header>
  );
};

export default Header;

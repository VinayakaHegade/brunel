import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container} role="conten-info">
      <div className={styles.left}>
        <img src="./copyright.svg" alt="" />
        <p>Talup 2023. All rights reserved</p>
      </div>

      <div className={styles.right}>
        <a>Terms & Conditions</a>
        <a>Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;

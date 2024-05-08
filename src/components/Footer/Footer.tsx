import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container} role="conten-info">
      <div className={styles.left}>
        <img src="./copyright.svg" alt="" />
        <p>Talup 2023. All rights reserved</p>
      </div>

      <div className={styles.right}>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;

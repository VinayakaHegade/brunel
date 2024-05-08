import { Link } from "react-router-dom";
import styles from "./index.module.css";
import Button from "../Common/Button/Button";

const Register = () => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Link to="/">
          <img src="./brunel.svg" alt="Brunel Logo" />
        </Link>
        <Link to="/">
          <img src="./close.svg" alt="close" />
        </Link>
      </section>

      <section className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h1>Registration Form</h1>
          <h2>Start your success Journey here!</h2>
        </div>
        <form>
          <div className={styles.inputContainer}>
            <input placeholder="Enter your name"></input>

            <div className={styles.inputError}>
              <img src="./error.svg" />
              <p>Enter a valid email address</p>
            </div>
          </div>

          <div className={styles.inputContainer}>
            <input placeholder="Enter your email"></input>

            <div className={styles.inputError}>
              <img src="./error.svg" />
              <p>Enter a valid email address</p>
            </div>
          </div>

          <Button
            variant="primary"
            className={styles.submitButton}
            disabled={true}
          >
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Register;

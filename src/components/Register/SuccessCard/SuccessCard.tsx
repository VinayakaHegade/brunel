import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styles from "./SuccesCard.module.css";

const SuccessCard = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(intervalId);
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (countdown === 0) {
    return <Navigate to="/" />;
  }

  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <img src="./assets/success.svg" alt="success icon" />
        <div className={styles.content}>
          <h1>Success Submitted</h1>
          <h2>Congratulations</h2>
          <p>
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
      </div>

      <p>
        Redirecting you to Homepage in
        <strong>{countdown} Seconds</strong>
      </p>
    </section>
  );
};

export default SuccessCard;

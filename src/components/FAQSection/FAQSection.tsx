import { FAQs } from "../../constants";
import Accordion from "../Common/Accordion/Accordion";
import styles from "./FAQSection.module.css";

const FAQSection = () => {
  return (
    <section className={styles.container}>
      <img src="./union.svg" alt="" className={styles.bgImage} />
      <div className={styles.heading}>
        <h4>What’s on your mind</h4>
        <h2>Ask Questions</h2>
      </div>

      <div className={styles.accordiansContainer}>
        {FAQs.map((FAQ) => (
          <Accordion question={FAQ.question} answer={FAQ.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

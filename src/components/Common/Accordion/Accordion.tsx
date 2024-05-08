import { useRef, useState } from "react";
import styles from "./Accordion.module.css";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentHeight = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles["question-container"]}`}
        onClick={toggleAccordion}
      >
        <h3>{question}</h3>
        <img
          src={isOpen ? "./minus.svg" : "./plus.svg"}
          alt=""
          className={`${styles.indicator} ${isOpen ? styles.active : ""}`}
        />
      </button>

      <div
        ref={contentHeight}
        className={styles["answer-container"]}
        style={
          isOpen
            ? { height: `${contentHeight.current?.scrollHeight}px` }
            : { height: "0px" }
        }
      >
        <p className={styles["answer-content"]}>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;

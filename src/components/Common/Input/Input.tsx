import { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputProps {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const Input = ({
  name,
  value,
  placeholder,
  onChange,
  errorMessage,
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={styles.input}
      />
      {errorMessage && (
        <div className={styles.inputError}>
          <img src="./assets/error.svg" alt="Error" />
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Input;

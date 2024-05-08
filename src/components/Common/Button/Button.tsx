import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface KnownButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary";
  icon?: ReactNode;
}

type ButtonProps = KnownButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant, icon, ...otherProps }: ButtonProps) => {
  const buttonClassName = `${styles.button} ${styles[variant]} ${
    otherProps.className || ""
  }`;

  return (
    <button {...otherProps} className={buttonClassName}>
      <span>{children}</span>
      {icon && <span className={styles.iconContainer}>{icon}</span>}
    </button>
  );
};

export default Button;

import { ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary";
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button = ({
  children,
  variant,
  icon,
  onClick,
  className,
}: ButtonProps) => {
  const buttonClassName = `${styles.button} ${styles[variant]} ${
    className || ""
  }`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      <span>{children}</span>
      {icon && <span className={styles.iconContainer}>{icon}</span>}
    </button>
  );
};

export default Button;

import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Common/Button/Button";
import SuccessCard from "./SuccessCard/SuccessCard";
import Input from "../Common/Input/Input";
import styles from "./Register.module.css";
import { INITIAL_VALIDATION_ERRORS } from "../../constants";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [validationErrors, setValidationErrors] = useState(
    INITIAL_VALIDATION_ERRORS
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let updatedValidationErrors = INITIAL_VALIDATION_ERRORS;

    if (name === "") {
      updatedValidationErrors = {
        ...updatedValidationErrors,
        name: "Name cannot be empty",
      };
    } else if (name.length > 30) {
      updatedValidationErrors = {
        ...updatedValidationErrors,
        name: "Name cannot be greater than 30 characters",
      };
    }

    if (email === "") {
      updatedValidationErrors = {
        ...updatedValidationErrors,
        email: "Email cannot be empty",
      };
    } else if (!emailRegex.test(email)) {
      updatedValidationErrors = {
        ...updatedValidationErrors,
        email: "Enter a valid email address",
      };
    }

    setValidationErrors(updatedValidationErrors);

    const hasErrors = Object.values(updatedValidationErrors).some(
      (error) => error !== ""
    );

    if (!hasErrors) {
      setIsFormSubmitted(true);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Link to="/">
          <img
            src="./assets/brunel.svg"
            alt="Brunel Logo"
            className={styles.logo}
          />
        </Link>
        {!isFormSubmitted && (
          <Link to="/">
            <img
              src="./assets/close.svg"
              alt="Close"
              className={styles.closeButton}
            />
          </Link>
        )}
      </section>
      {isFormSubmitted ? (
        <SuccessCard />
      ) : (
        <section className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1 className={styles.formTitle}>Registration Form</h1>
            <h2 className={styles.formSubtitle}>
              Start your success Journey here!
            </h2>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleFormData}
              errorMessage={validationErrors.name}
            />
            <Input
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleFormData}
              errorMessage={validationErrors.email}
            />
            <Button
              variant="primary"
              className={styles.submitButton}
              disabled={!(formData.name && formData.email)}
            >
              Submit
            </Button>
          </form>
        </section>
      )}
    </div>
  );
};

export default Register;

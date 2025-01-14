import React from "react";
import styles from "./privacyPolicy.module.css";
import Navbar from "../Navbar/Navbar";

const PrivacyPolicy = () => {
  return (
    <section className={styles.privacyPolicySection}>
      <Navbar />
      <h2 className={styles.heading}>Privacy Policy</h2>
      <p className={styles.paragraph}>
        We value your privacy and are committed to protecting your personal
        information.
      </p>
      <h3 className={styles.subheading}>What data do we collect?</h3>
      <p className={styles.paragraph}>
        We collect your name, email address, and message when you fill out the
        contact form.
      </p>
      <h3 className={styles.subheading}>How do we use your data?</h3>
      <p className={styles.paragraph}>
        Your data is used solely to respond to your inquiry via email.
      </p>
      <h3 className={styles.subheading}>Data storage</h3>
      <p className={styles.paragraph}>
        We store your data for no longer than 6 months unless required otherwise
        by law.
      </p>
      <h3 className={styles.subheading}>Your rights</h3>
      <p className={styles.paragraph}>
        You have the right to access, correct, and delete your personal data.
        Contact us if you want to exercise these rights.
      </p>
    </section>
  );
};

export default PrivacyPolicy;

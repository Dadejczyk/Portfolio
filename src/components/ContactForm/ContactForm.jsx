import styles from "./contactForm.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  // Funkcja do obsługi zmiany stanu zgody
  const handleConsentChange = () => {
    setIsConsentChecked(!isConsentChecked);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isConsentChecked) {
      alert("Musisz wyrazić zgodę na przetwarzanie danych osobowych.");
      return;
    }

    emailjs
      .sendForm("service_engyvax", "template_z90w3rg", form.current, {
        publicKey: "GLHXZvwwzzZRsCbzW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.sectionTitle}>Contact me</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="user_name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Your Name"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="user_email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Your Email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            className={styles.textarea}
            rows="5"
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            <input
              type="checkbox"
              name="consent"
              checked={isConsentChecked}
              onChange={handleConsentChange}
              required
            />
            I agree to the processing of my personal data in accordance with the{" "}
            <a href="/privacy-policy">Privacy Policy</a>.
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

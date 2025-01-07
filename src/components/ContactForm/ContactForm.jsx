import styles from "./contactForm.module.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
      <h2 className={styles.sectionTitle}>Contact me </h2>
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
        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </form>
    </section>
  );
};
export default ContactForm;

import styles from "./aboutMe.module.css";

function AboutMe() {
  return (
    <section className={styles.container} id="about">
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src="./images/IMG_5267.png"
            alt="Portrait"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.header}>About Me</h1>
          <p className={styles.aboutMeText}>
            I am a second-year computer science student at the Higher School of
            Entrepreneurship and Administration in Lublin, focusing on frontend
            development. I have built projects in HTML, CSS (SCSS), JavaScript,
            and React.js, available on my GitHub. Currently, I am developing a
            hair salon scheduling app and a smart home interface in Figma. I
            also have basic knowledge of backend development (Java, Spring Boot)
            and experience with databases like PostgreSQL, MongoDB, and MySQL. I
            am motivated, quick to learn, and committed to growing my skills in
            the dynamic field of IT.
          </p>
          <button className={styles.resumeButton}>Connect with me</button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

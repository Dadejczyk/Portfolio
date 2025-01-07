import styles from "./aboutMe.module.css";

function AboutMe() {
  return (
    <section className={styles.container} id="about">
      <img
        src="./images/kid-8788962_640.jpg"
        alt="Portrait"
        className={styles.image}
      />
      <div className={styles.content}>
        <h1 className={styles.header}>About Me</h1>
        <p className={styles.aboutMeText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          maiores voluptates dolor illo magni laudantium, quo assumenda est
          nihil cumque labore quasi quisquam! Obcaecati culpa doloribus ullam
          placeat dolorem vitae?
        </p>
        <button className={styles.resumeButton}>Connect with me</button>
      </div>
    </section>
  );
}

export default AboutMe;

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
            I am a second-year Computer Science student at the Higher School of
            Entrepreneurship and Administration in Lublin, specializing in web
            technologies and the Internet of Things. I create projects that you
            can find on my GitHub. These projects are a result of my imagination
            and creativity, as I have not yet worked on commercial projects.
            Currently, I am focusing on developing my skills in both frontend
            and backend technologies, such as Node.js. I work with Figma and
            content management tools, including AEM (Adobe Experience Manager),
            which allows for creating, editing, and publishing content on
            websites. I also have experience working with databases such as
            MongoDB and MySQL. My skills also include basic knowledge of backend
            technologies (Java, Spring Boot). I am highly motivated to learn,
            and my strength lies in quickly acquiring new technologies. I
            regularly learn on the Udemy platform to stay up-to-date with the
            latest solutions and best practices in IT. I approach various
            challenges with an open mind and enjoy expanding my competencies in
            this dynamic industry.
          </p>
          <a href="#contact" className={styles.resumeButton}>
            Connect with me
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

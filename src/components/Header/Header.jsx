import styles from "./header.module.css";

function Header() {
  return (
    <header id="home" className={styles.hero}>
      <img src="./images/kid.jpg" alt="" className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.greeting}>Hello,</span> I'm{" "}
          <span className={styles.name}>Bartłomiej Dadej</span>
        </h1>
        <p className={styles.subtitle}>
          Building Digital Dreams with Precision
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.buttonPrimary}>
            Explore My Work
          </a>
          <a href="/BartłomiejDadej.pdf" download>
            <button className={styles.buttonSecondary}>Download CV</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

import styles from "./header.module.css";

function Header() {
  return (
    <header id="home" className={styles.hero}>
      <img
        src="./images/kid-8788962_640.jpg"
        alt=""
        className={styles.overlay}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Bartłomiej Dadej</span>
        </h1>
        <p className={styles.subtitle}>Crafting Elegant Web Experiences</p>
        <div className={styles.cta}>
          <button className={styles.buttonPrimary}>Explore My Work</button>
          <a href="/BartłomiejDadej.pdf" download>
            <button className={styles.buttonSecondary}>Download CV</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

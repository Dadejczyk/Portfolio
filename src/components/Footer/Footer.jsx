import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; // Zaimportowanie ikon LinkedIn i GitHub

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h2 className={styles.logo}>Bartłomiej Dadej</h2>
          <p className={styles.tagline}>Crafting Elegant Web Experiences</p>
        </div>
        <div className={styles.rightSection}>
          <nav className={styles.navLinks}>
            <a href="#home" className={styles.link}>
              Home
            </a>
            <a href="#projects" className={styles.link}>
              Projects
            </a>
            <a href="#contact" className={styles.link}>
              Contact
            </a>

            <a href="/privacy-policy">Privacy Policy</a>
          </nav>
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/bart%C5%82omiej-dadej-782ab52a1/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.socialIcon}
                title="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/Dadejczyk?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.socialIcon}
                title="GitHub"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copySection}>
        <p>
          &copy; {new Date().getFullYear()} Bartłomiej Dadej. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

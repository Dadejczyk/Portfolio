import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Sprawdzenie bieżącej lokalizacji

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoText}>
          BDesigns
        </Link>
      </div>

      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <ul className={`${styles.navList} ${isMenuOpen ? styles.show : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {location.pathname === "/" ? (
          <>
            <li>
              <a onClick={() => scrollToSection("about")}>About Me</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("projects")}>Projects</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("skills")}>Skills</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("contact")}>Contact</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/#about">About Me</Link>
            </li>
            <li>
              <Link to="/#projects">Projects</Link>
            </li>
            <li>
              <Link to="/#skills">Skills</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

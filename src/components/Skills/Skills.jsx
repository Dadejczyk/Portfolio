import styles from "./skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const skillsData = [
  { id: 1, icon: faJs, title: "JavaScript" },
  { id: 2, icon: faHtml5, title: "HTML5" },
  { id: 3, icon: faCss3Alt, title: "CSS3" },
  { id: 4, icon: faReact, title: "React.js" },
  { id: 5, icon: faNodeJs, title: "Node.js" },
  { id: 6, icon: faDatabase, title: "MongoDB" },
];

function Skills() {
  return (
    <section
      className={styles.container}
      aria-labelledby="skills-heading"
      id="skills"
    >
      <h3 id="skills-heading" className={styles.header}>
        My Skills
      </h3>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill) => (
          <article className={styles.skillCard} key={skill.id}>
            <figure>
              <FontAwesomeIcon
                icon={skill.icon}
                className={styles.icon}
                title={skill.title}
              />
              <figcaption className={styles.text}>{skill.title}</figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;

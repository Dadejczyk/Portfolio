import styles from "./skills.module.css";
import skillsData from "../../Data/skillsData";

function Skills() {
  return (
    <section className={styles.container} aria-labelledby="skills-heading">
      <h3 id="skills-heading" className={styles.header}>
        My Skills
      </h3>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill) => (
          <article className={styles.skillCard} key={skill.id}>
            <figure>
              <img
                src={skill.icon}
                alt={`${skill.title} icon`}
                className={styles.icon}
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

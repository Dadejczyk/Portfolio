import styles from "./projects.module.css";
import cardsData from "../../Data/cardsData";

function Projects() {
  return (
    <section
      className={styles.cardsContainer}
      id="projects"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className={styles.sectionTitle}>
        My Projects
      </h2>
      <div className={styles.skillsGrid}>
        {cardsData.map((card) => (
          <article className={styles.card} key={card.id}>
            <img
              src={card.imageUrl}
              alt={card.title}
              className={styles.cardImg}
              loading="lazy"
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              <a
                href={`/projects/${card.id}`} // Dynamiczne linkowanie do szczegółów projektu
                className={styles.cardButton}
                aria-label={`Learn more about ${card.title}`}
              >
                Learn More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

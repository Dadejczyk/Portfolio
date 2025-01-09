import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardsData from "../Data/cardsData.js";
import Navbar from "../components/Navbar/Navbar.jsx";
import styles from "./projectDetails.module.css";

function ProjectDetails() {
  const { id } = useParams();
  const project = cardsData.find((project) => project.id === id);

  // Stan do kontrolowania, które zdjęcie jest aktualnie wybrane
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return <p>Project not found</p>; // Możesz dodać bardziej zaawansowaną obsługę błędów
  }

  // Funkcja do otwierania modala z wybranym zdjęciem
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Funkcja do zamknięcia modala
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>{project.title}</h1>

        <div
          className={styles.firstImg}
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        ></div>

        <p className={styles.desc}>{project.fullDescription}</p>

        <div className={styles.imageGallery}>
          <div
            className={styles.secondImg}
            style={{ backgroundImage: `url(${project.secondUrl})` }}
            onClick={() => openModal(project.secondUrl)}
          ></div>
          <div
            className={styles.thirdImg}
            style={{ backgroundImage: `url(${project.thirdUrl})` }}
            onClick={() => openModal(project.thirdUrl)}
          ></div>
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            style={{ backgroundImage: `url(${selectedImage})` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;

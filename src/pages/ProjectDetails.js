import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardsData from "../Data/cardsData.js";
import Navbar from "../components/Navbar/Navbar.jsx";
import styles from "./projectDetails.module.css";

function ProjectDetails() {
  const { id } = useParams();
  const project = cardsData.find((project) => project.id === id);

  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return <p>Project not found</p>;
  }

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

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
        
        <div className={styles.description}>
          <p>{project.fullDescription}</p>

          <h2 className={styles.subheading}>Key Features:</h2>
          <ul className={styles.featureList}>
            <li>
              <strong>Transparent Pricing:</strong> Easily view services and
              prices.
            </li>
            <li>
              <strong>Contact Section:</strong> Includes a contact form and
              detailed contact info for smooth appointment scheduling.
            </li>
            <li>
              <strong>Service Menu:</strong> Showcases treatments with
              descriptions and images to inspire trust.
            </li>
            <li>
              <strong>Elegant Design:</strong> A minimalist style tailored to
              the beauty industry.
            </li>
          </ul>

          <h2 className={styles.subheading}>Technologies Used:</h2>
          <ul className={styles.techList}>
            <li>
              Built with <strong>HTML, CSS, JavaScript, CMS</strong>
            </li>
            <li>
              <strong>SEO Optimized & Fully Responsive</strong>
            </li>
          </ul>

          <p>
            This project demonstrates my ability to blend aesthetics with
            functionality, providing both beauty and utility in design.
          </p>
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

import React, { useState } from "react";
import "../CSS/Education.css";

const Education = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const educationData = [
    {
      image: "https://indusuni.ac.in/wp-content/uploads/2021/07/Logo-Square.jpg",
      degree: "MBA (Master of Business Administration - Finance)",
      year: "2024 - 2026",
      institute: "Indus Institute of Management Studies (IIMS)",
      memories: [
        "/images/education/mba/fest1.jpg",
        "/images/education/mba/fest2.jpg",
      ],
      certificates: [
        "/images/education/mba/cert1.jpg",
        "/images/education/mba/cert2.jpg",
      ],
    },
    {
      image: "https://scholar9.com/uploads/666fdf8b26b1a.png",
      degree: "B.Tech (Bachelor of Technology in Computer Science & Engineering)",
      year: "2019 - 2023",
      institute: "C.U Shah College of Engineering and Technology",
      // memories: [
      //   "/images/education/btech/hackathon.png",
      //   "/images/education/btech/techfest.png",
      // ],
      certificates: [
        "/images/education/btech/cert1.jpg",
        "/images/education/btech/cert2.jpg",
      ],
    },
  ];

  return (
    <div className="edu-section">
      <h2 className="edu-title">🎓 My Education Journey</h2>
      <div className="edu-grid">
        {educationData.map((edu, index) => (
          <div className="edu-card" key={index}>
            <img src={edu.image} className="edu-main-img" alt={edu.institute} />
            <div className="edu-info">
              <h3>Degree: {edu.degree}</h3>
             
              <p className="edu-institute">Institute: {edu.institute}</p>
              <p className="edu-year">{edu.year}</p>

              {/* <h4>📸 Memories</h4>
              <div className="edu-gallery">
                {edu.memories.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="memories-img"
                    alt="memory"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div> */}

              <h4>📜 Certificates</h4>
              <div className="cert-gallery">
                {edu.certificates.map((cert, i) => (
                  <img
                    key={i}
                    src={cert}
                    className="cert-img"
                    alt="certificate"
                    onClick={() => setSelectedImage(cert)}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default Education;

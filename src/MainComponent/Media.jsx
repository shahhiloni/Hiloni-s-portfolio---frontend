import React, { useState } from "react";
import "../CSS/media.css";

const mediaData = [
  "../Images/image1.jpeg",
  "../Images/image2.jpeg",
  "../Images/image8.jpeg",
  "../Images/image6.jpeg",
  "../Images/image6.jpeg",
  "../Images/image7.jpeg",
  "../Images/image3.jpeg",
  "../Images/image15.jpeg",
  "../Images/image5.jpeg",
  "../Images/image16.jpeg",
  "../Images/image12.jpeg",
  "../Images/image13.jpeg",
  "../Images/image10.jpeg",
  "../Images/image11.jpeg",
  "../Images/image17.jpeg",
  "../Images/image19.jpeg",
  "../Images/image20.jpeg",
  "../Images/image21.jpeg",
  "../Images/image23.jpeg",
];

const Media = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleDoubleClick = (src) => {
    setZoomedImage(src);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="container py-4 media-gallery">
      <div className="row g-4">
        {mediaData.map((src, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="media-item">
              <img
                src={src}
                alt={`image${index}`}
                className="img-fluid rounded shadow-sm"
                onDoubleClick={() => handleDoubleClick(src)}
              />
            </div>
          </div>
        ))}

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
          <div className="media-item">
            <video controls className="img-fluid rounded shadow-sm">
              <source src="../Images/birthday.mp4" type="video/mp4" />
            </video>
            <video controls className="img-fluid rounded shadow-sm mt-2">
              <source src="../Images/mumbai.mp4" type="video/mp4" />
            </video>
            <video controls className="img-fluid rounded shadow-sm mt-2">
              <source src="../Images/haircut.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {zoomedImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img src={zoomedImage} alt="zoomed" className="zoomed-img" />
        </div>
      )}
    </div>
  );
};

export default Media;

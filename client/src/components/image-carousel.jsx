import { useState } from "react";
import "./image-carousel.css";

const ImageCarousel = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  function moreThan1Image() {
    return images.length > 1;
  }

  return (
    <div className="carousel-container">
      {moreThan1Image() ?
        <button onClick={prevImage} className="carousel-button left">◀</button>
        :
        null
      }
      <img src={images[currentIndex]} alt={altText} className="carousel-image" />
      {moreThan1Image() ?
        <button onClick={nextImage} className="carousel-button right">▶</button>
        :
        null
      }
    </div>
  );
};

export default ImageCarousel;
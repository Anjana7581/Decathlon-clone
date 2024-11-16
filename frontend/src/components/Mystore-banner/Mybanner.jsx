import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets'; // Assuming assets.js is in the same directory
import './Mybanner.css'; // CSS file for styling

const Mybanner = () => {
  const images = [
    assets.default1,
    assets.default2,
    assets.default3,
    assets.default4,
    assets.default5,
    assets.default6,
    assets.default7,
    assets.default8,
    assets.default9,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImageIndex]); // Run effect when currentImageIndex changes

  return (
    <div className="banner">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentImageIndex ? "dot active" : "dot"}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mybanner;

"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Carousel = () => {
  const images = [1, 2, 4, 5, 6, 7, 8, 9, 3]; // Add more image URLs as needed
  const itemsPerPage = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = images.length;

  // Function to go to the next slide
  const goToNextSlide = () => {
    const newIndex =
      currentIndex + itemsPerPage >= totalItems
        ? 0
        : currentIndex + itemsPerPage;
    setCurrentIndex(newIndex);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    const newIndex =
      currentIndex - itemsPerPage < 0
        ? totalItems - itemsPerPage
        : currentIndex - itemsPerPage;
    setCurrentIndex(newIndex);
  };

  // Effect to automatically advance to the next slide
  // useEffect(() => {
  //   const intervalId = setInterval(goToNextSlide, 3000); // Change interval as needed (3000 milliseconds = 3 seconds)
  //   return () => clearInterval(intervalId); // Clean up the interval on component unmount
  // }, [currentIndex]);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide bg-slate-700"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === 0 ? "active" : ""
              } carousel-image`}
            >
              <h1 className="ml-2">{image}</h1>
\
            </div>
          ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={goToPrevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={goToNextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

// src/components/Gallery.tsx
import React from "react";
import image1 from "../img/2020DIC25.jpg";
import image2 from "../img/20231SEP(2).jpg";
import image3 from "../img/20241JAN.jpg";

const images = [
  // Include the URLs of the images you want to display
  image1,
  image2,
  image3,
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;

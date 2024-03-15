// OurStory.tsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StoryImage from "../img/PXL_20230901_175328089_exported_12487.jpg";
import FooterSection from "../components/FooterSection";
import ceremonyImage from "../img/verde.jpg";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import firstImage from "../img/ellaYel.jpg";
import secondImage from "../img/ella.jpg";
import thirdImage from "../img/el.jpg";
import fourthImage from "../img/diferentepais.jpg";
import fifthImage from "../img/torontoSt.jpg";
const OurStory: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1); // New state for controlling the opacity
  // Array of images to be displayed
  const images = [
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
    fifthImage,
    // Add as many images as you have
  ];
  // Function to handle going to the next image
  const nextImage = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setOpacity(1);
    }, 500); // This should match the transition duration
  };
  // Function to handle going to the previous image
  const prevImage = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setOpacity(1);
    }, 500); // This should match the transition duration
  };
  const changeImage = (index: number) => {
    setOpacity(0); // Fade out the image
    setTimeout(() => {
      setCurrentImageIndex(index); // Change the image index after the fade out
      setOpacity(1); // Fade in the new image
    }, 500); // Match the timeout with the CSS transition-duration
  };
  // New touch event state hooks
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Function to handle the start of a touch
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Function to handle the end of a touch
  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);

    if (touchStart - touchEnd > minSwipeDistance) {
      nextImage();
    }

    if (touchEnd - touchStart > minSwipeDistance) {
      prevImage();
    }
  };
  return (
    <div className="flex flex-col">
      <div
        className="justify-between items-center p-5 hidden sm:flex"
        style={{ padding: "1rem 10%", boxSizing: "border-box" }}
      >
        <div className="flex gap-8">
          <button
            onClick={() => navigate("/our-story")}
            className="hover:underline text-lg"
          >
            Our Story
          </button>
          <button
            onClick={() => navigate("/location")}
            className="hover:underline text-lg"
          >
            Location
          </button>
        </div>
        <div
          className="flex-grow text-center"
          style={{ padding: "5rem 10%", marginRight: "13rem" }}
        >
          <button
            className="text-3xl font-normal hover:underline"
            onClick={() => navigate("/")}
          >
            J&F 01.25.25
          </button>
        </div>
        <div>
          <button
            className="bg-black text-white py-2 px-4 hover:bg-opacity-75"
            onClick={() => navigate("/rsvp")}
          >
            RSVP
          </button>
        </div>
      </div>
      <div className="text-center py-8">
        <h1 className="text-6xl font-light mb-4">How it all began</h1>
        <div className="h-1 w-screen bg-black mb-8 hidden sm:flex"></div>
      </div>
      <div
        className="bg-contain bg-no-repeat bg-center h-128 mb-10 hidden sm:flex"
        style={{ backgroundImage: `url(${StoryImage})` }}
      >
        {/* Image will be displayed as a background here */}
      </div>
      <div
        className="bg-cover bg-no-repeat flex flex-col justify-center items-center sm:hidden "
        style={{
          backgroundImage: `url(${StoryImage})`,
          backgroundSize: "190%", // Ajusta este valor para controlar el nivel de zoom
          backgroundPosition: "center 50%", // Centra la imagen - ajusta según sea necesario
          paddingTop: "1rem", // adjust this value to push the text up or down
          paddingBottom: "30rem", // reduce this to reduce space at the bottom
        }}
      ></div>
      {/* Adjusted quote or caption text with margins */}
      <blockquote className="text-xl italic my-8 mx-auto sm:mx-96 text-center sm:text-left">
        <p>
          "I saw her across the bar and I couldn't look away until I had the
          guts to talk to her."
        </p>
        <cite>— Francois</cite>
      </blockquote>

      <blockquote className="text-xl italic my-8 mx-auto text-center">
        <p>
          "We caught eye contact at one point and I was mesmerized by that
          addicting smile of his."
        </p>
        <cite>— Jessica</cite>
      </blockquote>

      <section id="ceremony" className="flex flex-wrap md:flex-nowrap">
        {/* Image container */}
        <div
          className="w-full md:w-1/2 h-96 md:h-screen bg-[length:650px_690px] bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ceremonyImage})` }}
        />
        {/* Text container */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-0">
          <div className="text-justify max-w-lg mx-auto md:mx-0 md:ml-20 md:mr-48">
            <p className="text-2xl mb-2">
              Jessica and Francois met while both out with their groups of
              friends at a bar in Toronto. After catching each other’s eye
              across the room and spending the rest of the night finding out how
              much they have in common, they started dating. Two years later,
              we're best friends, true loves, and badass partners in life. We're
              finally ready to make it official!{" "}
            </p>
          </div>
        </div>
      </section>
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-6">And the rest is history</h2>
        <p className="mx-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* <!-- Container for the image and navigation arrows --> */}
        <div className="flex items-center my-8">
          {/* <!-- Left Arrow Button, hidden on small screens --> */}
          <button
            onClick={prevImage}
            className="focus:outline-none bg-transparent z-10 hidden sm:block"
            aria-label="Previous image"
          >
            <img
              src={leftArrow}
              alt="Previous"
              className="h-8 w-8 md:h-12 md:w-12"
            />
          </button>

          {/* <!-- Image and dots container --> */}
          <div
            className="flex flex-col items-center flex-grow"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images[currentImageIndex]}
              alt="Our Story"
              className="w-full h-auto lg:max-h-[800px] transition-opacity duration-500 ease-in-out"
              style={{ opacity: opacity }}
            />
            <div className="flex justify-center p-4">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block h-3 w-3 mx-1 rounded-full cursor-pointer ${
                    currentImageIndex === idx ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => changeImage(idx)}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* <!-- Right Arrow Button, hidden on small screens --> */}
          <button
            onClick={nextImage}
            className="focus:outline-none bg-transparent z-10 hidden sm:block"
            aria-label="Next image"
          >
            <img
              src={rightArrow}
              alt="Next"
              className="h-8 w-8 md:h-12 md:w-12"
            />
          </button>
        </div>

        <FooterSection />
      </div>
    </div>
  );
};
export default OurStory;

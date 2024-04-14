import React, { useEffect } from "react";
import heroVideo from "../video/PXL_20230901_175328089.mp4";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated Tailwind classnames for responsive design
  // const heroClassNames =
  //   "relative flex items-center justify-center bg-cover bg-center " +
  //   "h-screen"; // Full height on all screen sizes

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
      <div id="hero" className="relative flex items-center justify-center h-screen">
        {/* Video replaces the backgroundImage */}
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


      </div>
      <div className="relative z-10 text-center text-black p-20">
          {/* Rest of your content */}
          <h1 className="text-4xl lg:text-6xl mb-16 font-dancing leading-none">
            Jessica & François
          </h1>
          <p className="text-lg lg:text-1xl mt-2 lg:mt-4 mb-4 lg:mb-8">
            January 25, 2025
          </p>
          <p className="text-sm lg:text-1xl mt-2 lg:mt-4 mb-12 lg:mb-8">San Salvador, El Salvador</p>
          <p className="font-dancing text-2xl lg:text-4xl mt-2 lg:mt-4 mb-4 lg:mb-8">Save the date!</p>
        </div>
    </div>
  );
};

export default HeroSection;
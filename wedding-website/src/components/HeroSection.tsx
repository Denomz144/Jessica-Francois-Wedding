import React, { useEffect } from "react";
import heroImage from "../img/PXL_20230901_175328089_exported_72843.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated Tailwind classnames for responsive design
  const heroClassNames =
    "relative flex items-center justify-center bg-cover bg-center " +
    "h-screen"; // Full height on all screen sizes

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
      <div
        id="hero"
        className={heroClassNames}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Adjusted padding here for mobile view */}
        <div className="text-center text-white py-20 lg:py-20 pb-44 lg:pb-60">
          <button
            className="text-xl lg:text-3xl font-normal hover:underline lg:text-black text-white absolute lg:hidden lg:relative top-10 lg:top-auto right-6"
            onClick={() => navigate("/")}
          >
            J&F 01.25.25
          </button>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-none">
            Jessica & Francois
          </h1>
          <p className="text-lg lg:text-2xl mt-2 lg:mt-4 mb-4 lg:mb-8">
            January 25, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// src/components/HeroSection.tsx
import React, { useEffect } from "react";
import heroImage from "../img/83e76d_1551060f90134258874bd64364b84a93~mv2.webp";
import { useNavigate } from "react-router-dom";
import FooterSection from "../components/FooterSection";
const heroStyle = {
  marginBottom: "4rem", // Adjust the gap size as needed
  backgroundImage: `url(${heroImage})`,
  backgroundSize: "cover",
};

const Location: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            onClick={() => navigate("/travel")}
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
            className="text-3xl font-dancing hover:underline"
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
        className="relative h-screen flex items-center justify-center bg-no-repeat"
        style={heroStyle}
      >
        <button
          className="text-xl lg:text-3xl font-normal hover:underline lg:text-black text-white absolute lg:hidden lg:relative top-10 lg:top-auto right-6"
          onClick={() => navigate("/")}
        >
          J&F 01.25.25
        </button>
        <div style={{ padding: "1rem", background: "rgba(0, 0, 0, 0.5)" }}>
          <div className="text-center text-white">
            <h1
              className="text-6xl font-semibold"
              style={{ textShadow: "2px 2px 4px #000000" }}
            >
              Travel
            </h1>
            <p
              className="text-2xl mt-4 mb-8"
              style={{ textShadow: "2px 2px 4px #000000" }}
            >
              Caja Marca, El Salvador
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-8">
        <h1 className="text-6xl font-light mb-4">Directions</h1>
        <p>
          Caja Marca is a short trip away from San Salvador. follow the
          instructions below.
        </p>
        <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
          <iframe
            width="100%"
            height="450"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-89.26982%2C13.75001%2C-89.26140%2C13.75465&layer=mapnik&marker=13.752493356859745%2C-89.26657734041908"
          ></iframe>
          <br />
          <small>
            <a href="https://www.openstreetmap.org/?mlat=13.752493356859745&mlon=-89.26657734041908#map=19/13.75209/-89.26652">
              View Larger Map
            </a>
          </small>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Location;

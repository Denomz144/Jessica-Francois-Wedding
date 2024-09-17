// src/components/HeroSection.tsx
import React, { useEffect } from "react";
import heroImage from "../img/capilla.jpg";
import { useNavigate } from "react-router-dom";
import FooterSection from "../components/FooterSection";
const heroStyle = {
  marginBottom: "4rem", // Adjust the gap size as needed
  backgroundImage: `url(${heroImage})`,
  backgroundSize: "contain",
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
          {/* <button
            onClick={() => navigate("/our-story")}
            className="hover:underline text-lg"
          >
            Our Story
          </button> */}
          <button
            onClick={() => navigate("/location")}
            className="hover:underline text-lg"
          >
            Location
          </button>
          <button
            onClick={() => navigate("/Registry")}
            className="hover:underline text-lg"
          >
            Registry
          </button>
          <button
            onClick={() => navigate("/FAQs")}
            className="hover:underline text-lg"
          >
            FAQs
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
        className="w-full md:w-full h-80 md:h-screen bg-center bg-no-repeat bg-cover"
        style={heroStyle}
      >
      </div>
      <div
            className="text-center font-serif"
            style={{
              maxWidth: "600px",
              margin: "0 auto", // Esto centra el contenido en todas las vistas
            }}
          >
            <p className="text-xl md:text-2xl mb-2">CajaMarca</p>
            <p className="text-xl md:text-2xl mb-2">
              Ruta al boqueron, km 22.5,
            </p>
            <p className="text-xl md:text-2xl mb-10">
              Volcán de San Salvador,<p></p>El Salvador
            </p>
          </div>
      <div className="text-center py-8">
        <h1 className="text-6xl font-serif mb-4">Directions</h1>
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

import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../img/torontoSt.jpg";

const RSVPButtonSection: React.FC = () => {
  const navigate = useNavigate();
  const handleRsvpClick = () => {
    navigate("/rsvp"); // This is the route we will navigate to when the button is clicked
  };

  return (
    <div>
      {/* Esta sección se ocultará en pantallas pequeñas (sm:) y será visible en pantallas más grandes */}
      {/* <div
        id="rsvp-button-section-large"
        className="hidden sm:flex bg-cover bg-left-bottom h-screen flex-col justify-center items-center"
        style={{
          maxWidth: "1200px",
          maxHeight: "700px",
          marginTop: "5rem",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <p
          className="text-4xl font-semi-bold text-white"
          style={{ marginTop: "1rem" }}
        >
          Join Us
        </p>
        <h2 className="text-6xl font-normal text-white mb-12">
          We hope you can make it!
        </h2>
        <a
          onClick={handleRsvpClick}
          className="text-lg font-bold text-white bg-black px-8 py-4 inline-block rounded hover:bg-gray-800 transition-colors"
        >
          RSVP
        </a>
      </div> */}

      {/* Esta sección se mostrará solo en pantallas pequeñas (sm:) */}
      <div className="flex items-center justify-center w-full h-full px-8 md:px-0">
        <div className="max-w-md mx-auto text-center">
          <p className="text-2xl md:text-5xl font-serif mb-10">
            Your presence would make our celebration even more memorable.
          </p>
          <p className="text-2xl md:text-5xl font-serif mb-10">
            Please RSVP using the link provided to help us plan the perfect day.
          </p>
          <button
            onClick={handleRsvpClick}
            className="text-lg font-serif bg-black text-white px-8 py-4 rounded mb-24 hover:bg-gray-800 transition-colors"
          >
            RSVP
          </button>
        </div>
      </div>
      <div
        id="rsvp-button-section-small"
        className="hidden lg:block flex-col justify-center items-center text-center h-screen bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      {/* <div
        className="text-center font-dancing justify-center items-center"
        style={{
          maxWidth: "600px",
          margin: "0 auto", // Centered for all views
        }}
      >
        <p className="text-2xl md:text-5xl font-serif mb-10">
          Your presence would make our celebration even more memorable.
        </p>
        <p className="text-2xl md:text-5xl font-serif mb-10">
          Please RSVP using the link provided to help us plan the perfect day.
        </p>

      </div> */}
      <div
        id="rsvp-button-section-small"
        className="sm:hidden flex flex-col justify-center items-center text-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* <div
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <p
            className="text-4xl font-semibold text-white"
            style={{ textShadow: "2px 2px 4px #000000" }}
          >
            Join Us
          </p>
          <h2
            className="text-6xl font-bold text-white mb-4"
            style={{ textShadow: "2px 2px 4px #000000" }}
          >
            We hope you can make it!
          </h2>
          <button
            onClick={handleRsvpClick}
            className="text-lg font-bold bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors"
          >
            RSVP
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default RSVPButtonSection;

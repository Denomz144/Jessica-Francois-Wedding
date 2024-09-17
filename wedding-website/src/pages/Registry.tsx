// src/components/HeroSection.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterSection from "../components/FooterSection";

const Registry: React.FC = () => {
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
        style={{
          textAlign: "center",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "20px auto",
          fontFamily: "Arial, sans-serif",
          backgroundColor: '#f0f0f0',
        }}
      >
        <div style={{ margin: "10px 0" }}></div>
        <h2>¡Gracias por acompañarnos!</h2>
        <div style={{ margin: "30px 0" }}></div>
        <p>
          Su presencia en nuestro día especial es el mejor regalo que podríamos
          pedir.
        </p>
        <p>
          Si desean hacernos un obsequio, una pequeña contribución para nuestra
          luna de miel sería muy apreciada.
        </p>
        <p>¡Muchas gracias!</p>
        <div style={{ margin: "30px 0" }}></div>
        <hr />
        <div style={{ margin: "30px 0" }}></div>
        <h2>Thank You for Joining us!</h2>
        <div style={{ margin: "30px 0" }}></div>
        <p>
          Your presence on our special day is the greatest gift we could ask
          for.
        </p>
        <p>
          If you feel inclined to give us a gift, a contribution towards our
          honeymoon would be truly appreciated.
        </p>
        <p>Thank you!</p>
      </div>

      <FooterSection />
    </div>
  );
};

export default Registry;

import React, { useEffect } from "react";
import heroVideo from "../video/PXL_20230901_175328089.mp4";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const HeroSection: React.FC = () => {
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
        className="relative flex items-center justify-center h-screen"
      >
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
        {/* Aquí está el nuevo texto */}
        <h1 className="text-4xl lg:text-6xl mb-8 font-dancing leading-none">
          Jessica & François
        </h1>
        <p className="text-lg lg:text-1xl mt-2 lg:mt-4 mb-4 lg:mb-8">
          January 25th, 2025
        </p>
        <CountdownTimer />
        <hr style={{ border: "0.5px solid #aaa", margin: "30px 0" }} />
        <p className="font-dancing text-xl lg:text-2xl mt-2 lg:mt-4 mb-4 lg:mb-8">
          Oscar Muñoz y Yesenia Escalante de Muñoz
        </p>
        <p className="font-dancing text-xl lg:text-2xl mt-2 lg:mt-4 mb-4 lg:mb-8">
          Yvon Chateuavert y Johanne Boutin
        </p>
        <p className="text-lg lg:text-2xl mt-2 lg:mt-4 mb-4 lg:mb-8">
          Tienen el honor en invitarle a la Ceremonia de Matrimonio Religioso de
          <span style={{fontWeight: "bold" }} className="font-sans"> Jessica Muñoz </span> y <span style={{fontWeight: "bold" }} className="font-sans"> François Châteauvert</span>, que se efectuará el día 25 de
          Enero a las 6:00 p.m. en la capilla de Cajamarca. Recepción a seguir.
        </p>
        <div style={{ margin: "30px 0" }}></div>
        <hr style={{ border: "0.5px solid #aaa", margin: "30px 0" }} />
        <div style={{ margin: "30px 0" }}></div>
        <p className="font-dancing text-xl lg:text-2xl mt-2 lg:mt-4 mb-4 lg:mb-8">
          Oscar Muñoz and Yesenia Escalante de Muñoz
        </p>
        <p className="font-dancing text-xl lg:text-2xl mt-2 lg:mt-4 mb-4 lg:mb-8">
          Yvon Chateuavert and Johanne Boutin
        </p>
        <p className="text-lg lg:text-2xl mt-2 lg:mt-4 mb-4 lg:mb-8">
          Have the honor to invite you to the Religious Wedding Ceremony of
          <span style={{fontWeight: "bold" }} className="font-sans"> Jessica Muñoz </span>
          and
          <span style={{fontWeight: "bold" }} className="font-sans"> François Châteauvert</span>, which will
          take place on January 25th at 6:00 p.m. in the Chapel of Cajamarca.
          Reception to follow.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

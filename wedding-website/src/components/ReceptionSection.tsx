import React from "react";
import receptionImage from "../img/B&W.jpg"; // Replace with the path to your actual image
import { InView } from "react-intersection-observer";

const ReceptionSection: React.FC = () => {
  return (
    <InView as="div" threshold={0.1} triggerOnce>
      {({ inView, ref }) => (
        <section
          ref={ref}
          id="reception"
          className={`flex flex-col md:flex-row-reverse ${
            inView ? "animate-fadeIn" : ""
          }`}
        >
          {/* Image container for desktop view on the right and mobile view on top */}
          <div
            className={`w-full md:w-1/2 h-96 md:h-screen bg-center bg-no-repeat bg-cover ${
              inView ? 'slideInFromRight' : ''
            }`}
            style={{ backgroundImage: `url(${receptionImage})` }}
          />
          {/* Text container on the left for desktop view and on bottom for mobile view */}
          <div
            className={`w-full md:w-1/2 flex items-center justify-center p-8 md:p-0 ${
              inView ? "slideInFromLeft" : ""
            }`}
          >
            <div
              className="text-center"
              style={{
                maxWidth: "600px",
                margin: "0 auto", // Centered for all views
              }}
            >
              <h2 className="text-4xl md:text-7xl font-serif mb-10">Reception</h2>
              <p className="text-3xl md:text-5xl mb-10">7:30 PM - 2:00 AM</p>
              <p className="text-xl md:text-2xl mb-2">Caja Marca</p>
              <p className="text-xl md:text-2xl mb-2">Ruta al boqueron km 22.5</p>
              <p className="text-xl md:text-2xl mb-4">Volcan de S.S</p>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default ReceptionSection;

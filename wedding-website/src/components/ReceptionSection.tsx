import React from "react";
import receptionImage from "../img/IMG_5450.jpeg"; // Replace with the path to your actual image
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
            className={`w-full md:w-1/2 h-96 md:h-screen bg-center bg-no-repeat bg-contain ${
              inView ? 'slideInFromRight' : ''
            }`}
            style={{ backgroundImage: `url(${receptionImage})` }}
          />
          {/* Text container on the left for desktop view and on bottom for mobile view */}
          <div
            className={`w-full md:w-1/2 flex items-center justify-center p-0 md:p-0 ${
              inView ? "slideInFromLeft" : ""
            }`}
          >
          </div>
        </section>
      )}
    </InView>
  );
};

export default ReceptionSection;

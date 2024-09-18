import React from "react";
import receptionImage from "../img/whatssap1.jpg"; // Replace with the path to your actual image
import { InView } from "react-intersection-observer";

const ReceptionSection: React.FC = () => {
  return (
    <InView as="div" threshold={0.1} triggerOnce>
      {({ inView, ref }) => (
        <section
          ref={ref}
          id="reception"
          className={`flex ${
            inView ? "animate-fadeIn" : ""
          } justify-center items-center`} // This ensures the content is centered in the viewport
        >
          {/* Image container for desktop view on the right and mobile view on top */}
          <div
            className={`w-full md:w-1/2 h-96 md:h-screen bg-center bg-no-repeat bg-contain ${
              inView ? 'slideInFromRight' : ''
            }`}
            style={{ backgroundImage: `url(${receptionImage})` }}
          />
        </section>
      )}
    </InView>
  );
};

export default ReceptionSection;

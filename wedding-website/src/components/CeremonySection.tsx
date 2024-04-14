import React from "react";
import ceremonyImage from "../img/capilla.jpg";
import { InView } from "react-intersection-observer";

const CeremonySection: React.FC = () => {
  return (
    <InView as="div" threshold={0.1} triggerOnce>
      {({ inView, ref }) => (
        <section
          ref={ref}
          id="ceremony"
          className={`flex flex-col md:flex-col ${
            inView ? "animate-fadeIn" : ""
          }`}
        >
          {/* Asegurarse de que la imagen de fondo se muestre en la vista móvil */}
          <div
            className="w-full md:w-full h-80 md:h-screen bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${ceremonyImage})` }}
          />
          {/* Contenido del texto alineado al centro y con padding solo en móviles */}
          <div
            className="text-center"
            style={{
              maxWidth: "600px",
              margin: "0 auto", // Esto centra el contenido en todas las vistas
            }}
          >
            <h2 className="font-dancing text-4xl md:text-7xl mb-10">
              Our Ceremony
            </h2>
            <p className="text-2xl md:text-5xl font-serif mb-10">6:00 PM</p>
            <p className="text-xl md:text-2xl mb-2">CajaMarca Chapel</p>
            <p className="text-xl md:text-2xl mb-2">
              Ruta al boqueron, km 22.5,
            </p>
            <p className="text-xl md:text-2xl mb-4">
              Volcán de San Salvador,<p></p>El Salvador
            </p>
          </div>

          <div
            className="text-center font-dancing"
            style={{
              maxWidth: "600px",
              margin: "0 auto", // Esto centra el contenido en todas las vistas
            }}
          >
            <h2 className="font-dancing text-4xl md:text-7xl mb-10">
              Cocktail Hour
            </h2>
            <p className="text-2xl md:text-5xl font-serif mb-10">7:00 PM</p>
          </div>
          <div
            className="text-center font-dancing"
            style={{
              maxWidth: "600px",
              margin: "0 auto", // Centered for all views
            }}
          >
            <h2 className="font-dancing text-4xl md:text-7xl mb-10">
              Reception
            </h2>
            <p className="text-2xl md:text-5xl font-serif mb-10">7:30 PM</p>
            <p className="text-xl md:text-2xl mb-2">CajaMarca</p>
            <p className="text-xl md:text-2xl mb-2">Salon Casa de la villa</p>
          </div>
        </section>
      )}
    </InView>
  );
};

export default CeremonySection;

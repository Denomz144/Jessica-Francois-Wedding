import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterSection from "../components/FooterSection";

const FAQs: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Navigation Section */}
      <div
        className="hidden sm:flex justify-between items-center p-5"
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
        <div className="flex-grow text-center" style={{ padding: "5rem 0" }}>
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

      {/* FAQ Section */}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          maxWidth: "800px",
          margin: "20px auto",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f0f0f0",
        }}
      >
        <h1>Preguntas Frecuentes / Frequently Asked Questions</h1>

        {/* Espaciado uniforme entre preguntas */}
        {[
          {
            pregunta: "1. ¿Cómo puedo reservar? / How do I reserve?",
            respuesta: "Puedes reservar haciendo clic en RSVP.",
            respuestaEn:
              "You can click the RSVP tab and type your name to reserve.",
          },
          {
            pregunta:
              "2. ¿Qué pasa si no reservo a tiempo? / What if I don’t RSVP in time?",
            respuesta: (
              <>
                Aunque nos encantaría celebrar con usted, si no reserva antes
                del
                <strong> 25 de Noviembre de 2024</strong>, será considerado como
                “no asistiré”. Lamentablemente, no podremos aceptar
                reservaciones tardías...
              </>
            ),
            respuestaEn: (
              <>
                We would love to celebrate with you, however, if you do not RSVP
                by the requested date of <strong>November 25th, 2024</strong>,
                you will be marked as “not attending”. Unfortunately, we will
                not be able to accommodate late RSVPs...
              </>
            ),
          },
          {
            pregunta:
              "3. ¿Qué pasa si no puedo asistir? / What if I cannot attend?",
            respuesta:
              "Si no puede atender a la boda, pedimos por favor que si usted reservo, nos deje saber por adelantado si ya no podra asistir.",
            respuestaEn:
              "If you RSVP and you cannot make it to the wedding, please let us know in advance if you will no longer be attending.",
          },
          {
            pregunta:
              "4. ¿A qué hora debo llegar? / What time should I arrive?",
            respuesta:
              "La ceremonia empieza a las _______ de la tarde. Por favor llegar 15-20 minutos antes de la ceremonia.",
            respuestaEn:
              "The ceremony will start at _______. Please arrive 15-20 minutes before the ceremony.",
          },
          {
            pregunta:
              "5. ¿Cuál es el código de vestimenta? / What is the dress code?",
            respuesta: (
              <>
                Nuestra boda será un evento formal. Invitamos a los caballeros a
                vestir traje y corbata, mientras que las damas pueden optar por
                un vestido largo o un vestido de cóctel formal...
              </>
            ),
            respuestaEn: (
              <>
                Our wedding will be a formal affair. Gentlemen are encouraged to
                wear a suit and tie, while ladies can opt for a floor-length
                gown or formal cocktail dress...
              </>
            ),
          },
        ].map((faq, index) => (
          <div key={index} style={{ margin: "30px 0" }}>
            <h3 style={{ fontSize: "1.1rem" }}>{faq.pregunta}</h3>
            <p>{faq.respuesta}</p>
            <hr style={{ border: "0.5px solid #aaa", margin: "30px 0" }} />
            <p>{faq.respuestaEn}</p>
          </div>
        ))}
      </div>

      <FooterSection />
    </div>
  );
};

export default FAQs;

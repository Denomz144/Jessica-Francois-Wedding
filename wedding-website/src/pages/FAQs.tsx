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

        <div style={{ margin: "20px 0" }}></div>

        {/* Pregunta 1 */}
        <h3 style={{ fontSize: "1.1rem" }}>
          1. ¿Cómo puedo reservar? / How do I reserve?
        </h3>
        <p>Puedes reservar haciendo clic en RSVP.</p>
        <div style={{ margin: "30px 0" }}></div>
        <hr style={{ border: "0.5px solid #aaa", margin: "30px 0" }} />
        <div style={{ margin: "30px 0" }}></div>
        <p>You can click the RSVP tab and type your name to reserve.</p>

        <div style={{ margin: "30px 0" }}></div>

        {/* Pregunta 2 */}
        <h3 style={{ fontSize: "1.1rem" }}>
          2. ¿Qué pasa si no reservo a tiempo? / What if I don’t RSVP in time?
        </h3>
        <div style={{ margin: "30px 0" }}></div>
        <p>
          Aunque nos encantaría celebrar con usted, si no reserva antes del
          <strong> 25 de Noviembre de 2024</strong>, será considerado como “no
          asistiré”.
        </p>
        <p>
          Lamentablemente, no podremos aceptar reservaciones tardías ya que
          necesitamos proporcionar el número exacto de invitados a nuestros
          proveedores. Agradecemos su comprensión. Si necesita más tiempo para
          hacer su reservación, por favor contáctenos.
        </p>
        <div style={{ margin: "30px 0" }}></div>
        <hr style={{ border: "0.5px solid #aaa", margin: "30px 0" }} />
        <div style={{ margin: "30px 0" }}></div>
        <p>
          We would love to celebrate with you, however, if you do not RSVP by
          the requested date of <strong>November 25th, 2024</strong>, you will
          be marked as “not attending”. Unfortunately, we will not be able to
          accommodate late RSVPs as we have to provide an exact guest count to
          the venue and our vendors. We hope you can understand. However, if you
          require additional time to reserve, please feel free to contact us.
        </p>

        <div style={{ margin: "40px 0" }}></div>

        {/* Pregunta 3 */}
        <h3 style={{ fontSize: "1.1rem" }}>3. ¿Qué pasa si no puedo asistir? / What if I cannot attend?</h3>
        <div style={{ margin: "30px 0" }}></div>
        <p>
          Si no puede atender a la boda, pedimos por favor que si usted reservo,
          nos deje saber por adelantado si ya no podra asistir.
        </p>
        <div style={{ margin: "30px 0" }}></div>
        <hr style={{ border: "0.5px solid #aaa", margin: "30px 0" }} />
        <div style={{ margin: "30px 0" }}></div>
        <p>
          If you RSVP and you cannot make it to the wedding, please let us know
          in advance if you will no longer be attending.
        </p>

        <div style={{ margin: "30px 0" }}></div>

        {/* Pregunta 4 */}
        <h3 style={{ fontSize: "1.1rem" }}>4. ¿A qué hora debo llegar? / What time should I arrive?</h3>
        <div style={{ margin: "30px 0" }}></div>
        <p>
          La ceremonia empieza a las _______ de la tarde. Por favor llegar 15-20
          minutos antes de la ceremonia.
        </p>
        <div style={{ margin: "30px 0" }}></div>
        <hr style={{ border: "0.5px solid #aaa", margin: "30px 0" }} />
        <div style={{ margin: "30px 0" }}></div>
        <p>
          The ceremony will start at _______. </p><p>Please arrive 15-20 minutes before
          the ceremony.
        </p>

        <div style={{ margin: "30px 0" }}></div>

        {/* Pregunta 5 */}
        <h3 style={{ fontSize: "1.1rem" }}>5. ¿Cuál es el código de vestimenta? / What is the dress code?</h3>
        <div style={{ margin: "30px 0" }}></div>
        <p>
          Nuestra boda será un evento formal. Invitamos a los caballeros a
          vestir traje y corbata, mientras que las damas pueden optar por un
          vestido largo o un vestido de cóctel formal.
          <br />
          Damas, si planean usar tacones, tengan en cuenta que la mayor parte de
          la recepción será en el césped. Les recomendamos llevar tacones
          gruesos o zapatos planos. ¡No olviden traer zapatos cómodos para
          bailar toda la noche!
        </p>
        <hr style={{ border: "0.5px solid #aaa", margin: "30px 0" }} />
        <p>
          Our wedding will be a formal affair. Gentlemen are encouraged to wear
          a suit and tie, while ladies can opt for a floor-length gown or formal
          cocktail dress.
          <br />
          Ladies, if you are planning to wear heels, please note that the
          majority of the reception will be held on grass. We recommend wearing
          chunky heels or flats. Don’t forget to bring your comfortable shoes to
          dance the night away!
        </p>
      </div>

      <FooterSection />
    </div>
  );
};

export default FAQs;

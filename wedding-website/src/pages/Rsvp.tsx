import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StoryImage from "../img/0393.jpg";
import { useForm, ValidationError } from "@formspree/react";
import FooterSection from "../components/FooterSection";

const Rsvp: React.FC = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mjvnovpz");
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [comments, setComments] = useState("");
  const [attending, setAttending] = useState("");
  const [foodAllergies, setFoodAllergies] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const guestCount = parseInt(numberOfGuests, 10);

    if (guestCount > 0 && !guests) {
      alert(
        "Por favor, ingrese al menos un nombre de invitado. / Please enter at least one guest name."
      );
      return;
    }

    handleSubmit(event);
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setGuests("");
    setNumberOfGuests("");
    setComments("");
    setAttending("");
  };

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
      <div className="text-center py-8">
        <div className="h-1 w-screen bg-black mb-8 hidden sm:flex"></div>
      </div>
      <div
        className="w-full md:w-full h-80 md:h-screen bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${StoryImage})` }}
      ></div>

      <div className="flex flex-col items-center justify-center w-full p-8 md:flex-row md:justify-center md:items-center">
        <div
          className="text-center font-dancing"
          style={{ maxWidth: "600px", width: "100%", margin: "0 auto" }}
        >
          <p className="text-2xl md:text-3xl font-serif mb-10">
            Gracias de todo corazón por su amor, apoyo y por ser parte de
            nuestras vidas.
          </p>
          <p className="text-2xl md:text-3xl font-serif mb-10">
            ¡Estamos ansiosos por celebrar este día inolvidable con ustedes!
          </p>
          <hr style={{ border: "0.5px solid #aaa", margin: "30px 0" }} />
          <p className="text-2xl md:text-3xl font-serif mb-10">
            Thank you from the bottom of our hearts for your love, support, and
            for being part of our lives.
          </p>
          <p className="text-2xl md:text-3xl font-serif mb-10">
            We can't wait to celebrate this unforgettable day with you!
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center py-8">
        <h1 className="text-3xl font-dancing mb-6">RSVP</h1>
        <form
          className="w-full max-w-lg"
          action="https://formspree.io/f/mjvnovpz"
          method="POST"
          onSubmit={validateForm}
        >
          <div className="flex flex-wrap -mx-0 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Nombre / First Name (required)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName"
              />
              <ValidationError
                prefix="First Name"
                field="firstName"
                errors={state.errors}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Apellido / Last Name (required)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="lastName"
              />
              <ValidationError
                prefix="Last Name"
                field="lastName"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-0 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Correo Electrónico / Email (required)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <div className="flex flex-col items-center mb-6">
            <p className="text-x">
              ¿Vas a asistir? / Will you be attending? (required)
            </p>
            <div className="flex items-center">
              <input
                type="radio"
                value="yes"
                id="yes"
                name="attending"
                checked={attending === "yes"}
                onChange={() => setAttending("yes")}
                className="mx-2"
              />
              <label htmlFor="yes">Sí / Yes</label>
              <input
                type="radio"
                value="no"
                id="no"
                name="attending"
                checked={attending === "no"}
                onChange={() => setAttending("no")}
                className="mx-2"
              />
              <label htmlFor="no">No / No</label>
            </div>
          </div>

          <div className="flex flex-wrap -mx-0 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="number-of-guests"
              >
                Número total de invitados (incluyéndote a ti) / Total Number of
                Guests (including yourself)
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="number-of-guests"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                name="numberOfGuests"
              >
                <option value="">Selecciona... / Select...</option>
                <option value="0">0 (solo tú) / 0 (just you)</option>
                <option value="1">
                  1 (tú + 1 invitado) / 1 (you + 1 guest)
                </option>
                <option value="2">
                  2 (tú + 2 invitados) / 2 (you + 2 guests)
                </option>
                <option value="3">
                  3 (tú + 3 invitados) / 3 (you + 3 guests)
                </option>
                <option value="4">
                  4 (tú + 4 invitados) / 4 (you + 4 guests)
                </option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap -mx-0 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="guests"
              >
                Nombres de los invitados en tu grupo / Names of Guests in Your
                Party
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="guests"
                type="text"
                placeholder="Nombres de invitados / Guest Names"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                name="guests"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-0 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="food-allergies"
              >
                ¿Tienes alguna alergia alimentaria? / Do You Have Any Food
                Allergies?
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="food-allergies"
                type="text"
                placeholder="Especifica tus alergias / Specify Your Allergies"
                value={foodAllergies}
                onChange={(e) => setFoodAllergies(e.target.value)}
                name="foodAllergies"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-0 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="comments"
              >
                Preguntas o Comentarios / Questions or Comments
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="comments"
                placeholder="Tus Comentarios / Your Comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                name="comments"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mt-6 justify-center">
            <div className="px-3">
              <button
                className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
                type="submit"
                disabled={state.submitting}
              >
                Enviar / Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg text-center">
            <h2 className="font-bold text-2xl mb-4">¡Gracias! / Thank You!</h2>
            <p className="mb-4">
              Gracias por acompañarnos. Estamos emocionados de verte en la boda.
              / Thanks for joining us! We are excited to see you at the wedding.
            </p>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              onClick={() => {
                setShowModal(false);
                resetForm();
              }}
            >
              Cerrar / Close
            </button>
          </div>
        </div>
      )}
      <FooterSection />
    </div>
  );
};

export default Rsvp;

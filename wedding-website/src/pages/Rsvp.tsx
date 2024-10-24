import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StoryImage from "../img/0393.jpg";
import { useForm, ValidationError } from "@formspree/react";
import FooterSection from "../components/FooterSection";

const Rsvp: React.FC = () => {
  const navigate = useNavigate();
  const [state, handleSubmit, reset] = useForm("mjvnovpz");
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [comments, setComments] = useState("");
  const [attending, setAttending] = useState("");
  const [foodAllergies, setFoodAllergies] = useState("");
  const [guestNames, setGuestNames] = useState([""]); // Inicializa con un campo


  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);


  const resetFormState = () => {
    reset(); // Restablecer el estado del formulario
    setShowModal(false); // Cerrar el modal
  };
  // Función para validar el correo electrónico
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const handleModalMessage = () => {
    if (attending === "no") {
      return {
        title: "Lamentamos que no puedas asistir. / We are sorry you can’t make it.",
        message: "Agradecemos que nos lo hagas saber. ¡Te deseamos lo mejor! / Thank you for letting us know. We wish you all the best!",
      };
    }
    return {
      title: "¡Gracias! / Thank You!",
      message: "Gracias por acompañarnos. Estamos emocionados de verte en la boda. / Thanks for joining us! We are excited to see you at the wedding.",
    };
  };
  const handleGuestChange = (index: number, value: string) => {
    const updatedGuests = [...guestNames];
    updatedGuests[index] = value;
    setGuestNames(updatedGuests);
  };
  const addGuestField = () => {
    if (guestNames.length < 4) {
      setGuestNames([...guestNames, ""]); // Agrega un nuevo campo vacío
    } else {
      alert("¡Solo puedes agregar hasta 4 invitados! / You can only add up to 4 guests!");
    }
  };
  const removeGuestField = (index: number) => {
    const updatedGuests = guestNames.filter((_, i) => i !== index);
    setGuestNames(updatedGuests);
  };
  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const guestCount = parseInt(numberOfGuests, 10);

    // Validar que el número de campos de invitados coincida con el número de invitados
    if (guestCount > 1 && guestNames.length !== guestCount - 1) {
      alert(
        `Por favor, ingrese el nombre de todos los invitados. Se requieren ${guestCount} nombres. / Please enter the name of all guests. ${guestCount} guest names are required.`
      );
      return;
    }

    // Verificar que ninguno de los campos de nombre de invitados esté vacío si guestCount > 0
    if (guestCount > 1) {
      const emptyGuestNames = guestNames.filter((name) => !name.trim());
      if (emptyGuestNames.length > 0) {
        alert(
          "Por favor, asegúrese de que los campos de nombre de los invitados no estén vacíos. / Please make sure guest name fields are not empty."
        );
        return;
      }
    }

    // Validar que los campos de nombre y correo no estén vacíos
    if (!firstName.trim()) {
      alert("Por favor, ingrese su nombre. / Please enter your first name.");
      return;
    }

    if (!lastName.trim()) {
      alert("Por favor, ingrese su apellido. / Please enter your last name.");
      return;
    }

    if (!email.trim()) {
      alert("Por favor, ingrese su correo electrónico. / Please enter your email.");
      return;
    }

    // Validar el formato del correo electrónico
    if (!validateEmail(email)) {
      alert("Por favor, ingrese un correo electrónico válido. / Please enter a valid email.");
      return;
    }

    handleSubmit(event);
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setNumberOfGuests("");
    setComments("");
    setAttending("");
    setFoodAllergies("");
    setGuestNames([""]); // Resetea los nombres de invitados a un campo vacío
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
                Número total de personas (incluyéndote a ti) / Total Number of People (including yourself)
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="number-of-guests"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                name="numberOfGuests"
              >
                <option value="">Selecciona... / Select...</option>
                <option value="1">1 (solo tú) / 1 (just you)</option>
                <option value="2">2 (tú + 1 invitado) / 2 (you + 1 guest)</option>
                <option value="3">3 (tú + 2 invitados) / 3 (you + 2 guests)</option>
                <option value="4">4 (tú + 3 invitados) / 4 (you + 3 guests)</option>
                <option value="5">5 (tú + 4 invitados) / 5 (you + 4 guests)</option>
              </select>
            </div>
          </div>


          {numberOfGuests !== "1" && (
            <div className="flex flex-wrap -mx-0 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Nombres de los invitados en tu grupo / Names of Guests in Your Party
                </label>
                {guestNames.map((guest, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder={`Invitado ${index + 1}`}
                      value={guest}
                      onChange={(e) => handleGuestChange(index, e.target.value)}
                      name={`guestName_${index + 1}`}
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeGuestField(index)}
                        className="ml-2 text-red-500"
                      >
                        X
                      </button>
                    )}
                  </div>
                ))}

                {guestNames.length < 4 && (
                  <button
                    type="button"
                    onClick={addGuestField}
                    className="mt-2 text-blue-500"
                  >
                    Agregar otro invitado / Add another guest
                  </button>
                )}
              </div>
            </div>
          )}

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
            <h2 className="font-bold text-2xl mb-4">{handleModalMessage().title}</h2>
            <p className="mb-4">{handleModalMessage().message}</p>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              onClick={() => {
                setShowModal(false);
                resetForm(); // Reinicia los campos del formulario
                resetFormState(); // Reinicia el estado de Formspree
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

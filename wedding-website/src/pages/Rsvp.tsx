// rsvp.tsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StoryImage from "../img/sacoByW.jpg";
import { useForm, ValidationError } from "@formspree/react";
import FooterSection from "../components/FooterSection";
const Rsvp: React.FC = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mjvnovpz"); // Use your actual Formspree form ID
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  // const [foodRestrictions, setFoodRestrictions] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [comments, setComments] = useState("");
  const [attending, setAttending] = useState("");
  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]); // Only re-run the effect if state.succeeded changes
  // Client-side validation logic
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform your client-side validation here
    // For example, check for input length, email pattern, etc.
    // If everything is fine, proceed with submitting the form
    handleSubmit(event);
  };
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setGuests("");
    setNumberOfGuests("");
    // setFoodRestrictions("");
    setComments("");
    setAttending(""); // Reset radio button
  };

  return (
    <div className="flex flex-col">
      <div
        className="justify-between items-center p-5 hidden sm:flex"
        style={{ padding: "1rem 10%", boxSizing: "border-box" }}
      >
        <div className="flex gap-8">
          <button
            onClick={() => navigate("/our-story")}
            className="hover:underline text-lg"
          >
            Our Story
          </button>
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
            className="text-3xl font-normal hover:underline"
            onClick={() => navigate("/")}
          >
            J&F 01.25.25
          </button>
        </div>
        <div>
          <button
            className="bg-black text-white py-2 px-4 hover:bg-opacity-75 "
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
        className="bg-contain bg-[center_top_-7rem] h-screen flex-col justify-center items-center bg-no-repeat hidden sm:flex"
        style={{
          maxWidth: "1900px",
          marginLeft: "5rem",
          maxHeight: "700px",
          marginRight: "5rem",
          backgroundImage: `url(${StoryImage})`,
        }}
      >
        <p
          className="text-4xl font-semi-bold text-white"
          style={{ marginTop: "1rem" }}
        >
          RSVP
        </p>
        <h2 className="text-2xl font-normal text-white mb-12">
          We look forward to seeing you! Fill out form below.
        </h2>
        {/* Image will be displayed as a background here */}
      </div>

      <div
        className="bg-cover bg-no-repeat flex flex-col justify-center items-center sm:hidden "
        style={{
          backgroundImage: `url(${StoryImage})`,
          backgroundSize: "160%", // Ajusta este valor para controlar el nivel de zoom
          backgroundPosition: "right 10%", // Centra la imagen - ajusta según sea necesario
          paddingTop: "5rem", // adjust this value to push the text up or down
          paddingBottom: "10rem", // reduce this to reduce space at the bottom
        }}
      >
        <button
          className="absolute top-32 right-4 text-xl font-normal hover:underline text-white lg:hidden"
          onClick={() => navigate("/")}
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          J&F 01.25.25
        </button>

        {/* Adjust this div's padding or margin as necessary */}
        <div
          style={{
            padding: "1rem",
            paddingBottom: "0.5rem",
            marginTop: "12rem",
            /* adjust this value as needed */ borderRadius: "10px",
            // background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* <p
            className="text-4xl font-semibold text-white text-center"
            style={{ textShadow: "2px 2px 4px #000000" }}
          >
            RSVP
          </p>
          <h2
            className="text-2xl font-normal text-white mb-4"
            style={{ textShadow: "2px 2px 4px #000000" }}
          >
            We look forward to seeing you! Fill out form below.
          </h2> */}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-0">
        <div
          className="text-center font-dancing"
          style={{
            maxWidth: "600px",
            margin: "0 auto", // Esto centra el contenido en todas las vistas
          }}
        >
          <p className="text-2xl md:text-5xl font-serif mb-10">
            Thank you from the bottom of our hearts for your love, support, and
            for being part of our lives.
          </p>
          <p className="text-2xl md:text-5xl font-serif mb-10">
            {" "}
            We can't wait to celebrate this unforgettable day with you!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-8">
        <h1 className="text-3xl font-dancing mb-6">
          RSVP
        </h1>

        {/* Make sure to replace the action attribute with the correct URL */}
        <form
          className="w-full max-w-lg"
          action="https://formspree.io/f/mjvnovpz" // Correct action URL
          method="POST"
          onSubmit={validateForm} // Pass handleSubmit directly without wrapping it
        >
          <div className="flex flex-wrap -mx-0 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name (required)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName" // This should match with the 'register' call in @formspree/react
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
                Last Name (required)
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
                Email (required)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email" // This should match with the 'register' call in @formspree/react
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          {/* Will you be attending section */}
          <div className="flex flex-col items-center mb-6">
            <p className="text-x">Will you be attending? (required)</p>
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

              <label htmlFor="yes">Yes</label>

              <input
                type="radio"
                value="no"
                id="no"
                name="attending"
                checked={attending === "no"}
                onChange={() => setAttending("no")}
                className="mx-2"
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          {/* Number of Guests dropdown */}
          <div className="flex flex-wrap -mx-0 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="number-of-guests"
              >
                Number of Guests (max 2)
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="number-of-guests"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                name="numberOfGuests"
              >
                <option value="">Select...</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
          {/* Names of Guests in your Party */}
          <div className="flex flex-wrap -mx-0 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="guests"
              >
                Names of Guests in your Party
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="guests"
                type="text"
                placeholder="Guest Names"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                name="guests" // This should match with the 'register' call in @formspree/react
              />
            </div>
          </div>

          {/* Any food restrictions?
          <div className="flex flex-wrap -mx-0 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="foodRestrictions"
              >
                Any food restrictions?
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="foodRestrictions"
                type="text"
                placeholder="Food Restrictions"
                value={foodRestrictions}
                onChange={(e) => setFoodRestrictions(e.target.value)}
                name="foodRestrictions" // This should match with the 'register' call in @formspree/react
              />
            </div>
          </div> */}

          {/* Questions or Comments */}
          <div className="flex flex-wrap -mx-0 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="comments"
              >
                Questions or Comments
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="comments"
                placeholder="Your Comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                name="comments" // This should match with the 'register' call in @formspree/react
              ></textarea>
            </div>
          </div>
          {/* Submit button */}
          <div className="flex flex-wrap -mx-3 mt-6 justify-center">
            {" "}
            {/* Adjusted for centering */}
            <div className="px-3">
              <button
                className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg text-center">
            <h2 className="font-bold text-2xl mb-4">Thank You!</h2>
            <p className="mb-4">
              Thanks for joining us! We are excited to see you at the wedding.
            </p>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              onClick={() => {
                setShowModal(false);
                resetForm();
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <FooterSection />
    </div>
  );
};
export default Rsvp;

import React from "react";
import { useNavigate } from "react-router-dom";

const FooterSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-4">
          {/* Footer Links */}
          <button 
            className="text-lg px-4 py-2 hover:underline"
            onClick={() => navigate("/")}
          >
            Ceremony & Reception
          </button>
          <button 
            className="text-lg px-4 py-2 hover:underline"
            onClick={() => navigate("/location")}
          >
            Location
          </button>
          <button 
            className="text-lg px-4 py-2 hover:underline"
            onClick={() => navigate("/rsvp")}
          >
            RSVP
          </button>
          <button 
            className="text-lg px-4 py-2 hover:underline"
            onClick={() => navigate("/FAQs")}
          >
            FAQs
          </button>
          <button 
            className="text-lg px-4 py-2 hover:underline"
            onClick={() => navigate("/Registry")}
          >
            Registry
          </button>
        </div>
        <div className="mb-4">
          {/* Social Share Options */}
          <span className="text-lg">Share: </span>
          {/* Add social media icons and links here */}
        </div>
        <div>
          <p className="text-lg">#JessicaAndFrancois2025</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
// src/components/FooterSection.tsx
import React from "react";
const FooterSection: React.FC = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-4">
          {/* Footer Links */}
          <a
            href="/"
            className="text-lg px-4 py-2 hover:underline"
          >
            Ceremony & Reception
          </a>
          <a href="/location" className="text-lg px-4 py-2 hover:underline">
            Location
          </a>
          <a href="/rsvp" className="text-lg px-4 py-2 hover:underline">
            RSVP
          </a>
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

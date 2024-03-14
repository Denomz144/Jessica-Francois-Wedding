// StorySection.tsx

import React from "react";
import { useNavigate } from "react-router-dom";

const StorySection: React.FC = () => {
  const navigate = useNavigate();

  const handleStoryClick = () => {
    navigate("/our-story"); // This is the route we will navigate to when the button is clicked
  };

  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-2xl mb-4">See how it all began</h2>
      <div className="w-1/2 h-px bg-black mb-4"></div>
      <button
        className="py-2 px-4 bg-black text-white border border-black hover:bg-white hover:text-black transition-colors"
        onClick={handleStoryClick}
      >
        Our Story
      </button>
    </div>
  );
};

export default StorySection;

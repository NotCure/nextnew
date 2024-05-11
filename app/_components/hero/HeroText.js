import React from "react";

const HeroText = () => {
  return (
    <div className="text-center mt-28 md:mt-40 relative">
      {/* Black box with 50% opacity behind "Your Safety" */}

      <h1 className="text-white text-5xl md:text-7xl font-bold relative ">
        Your Safety
      </h1>

      {/* Black box with 50% opacity behind "Our Priority" */}
      <div className="absolute inset-0 bg-black opacity-25 md:h-48"></div>
      <h1 className="text-white text-6xl md:text-8xl font-bold relative ">
        Our Priority
      </h1>
    </div>
  );
};

export default HeroText;

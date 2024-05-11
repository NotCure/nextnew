// LargeImage.js
import React from "react";
import Image from "next/image";

const LargeImage = () => {
  return (
    <div className="hidden md:flex w-full md:w-1/2 p-4 justify-center items-center">
      <Image
        src="/assests/services/Services.png" // Update this path as needed
        alt="Large Scene"
        width={500} // Customize the width as needed
        height={600} // Customize the height as needed
        objectFit="cover" // Adjust 'cover' to 'contain' if needed
      />
    </div>
  );
};

export default LargeImage;

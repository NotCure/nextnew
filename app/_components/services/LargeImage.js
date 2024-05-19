// LargeImage.js
import React from "react";
import Image from "next/image";

const LargeImage = () => {
  return (
    <div className="hidden md:flex w-full md:w-1/2 p-4 justify-center items-center">
      <Image
        src="/assests/services/Services.png" 
        alt="Large Scene"
        width={500}
        height={600}
        objectFit="cover"
      />
    </div>
  );
};

export default LargeImage;

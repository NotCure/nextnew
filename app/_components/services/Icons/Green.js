// GreenIcon.js
import React from "react";
import Image from "next/image";

const GreenIcon = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center bg-cover bg-center">
      <div className="bg-black bg-opacity-50 p-2 sm:p-4 sm:text-5xl rounded-lg">
        {/* Title Section */}
        <div className="flex min-h-56 items-center justify-center text-center bg-cover bg-center">
          <div className="bg-black bg-opacity-50 p-2 sm:p-4 sm:text-5xl rounded-lg relative underline-stroke-green">
            <h1 className="text-white font-bold text-5xl sm:text-6xl">Theft</h1>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 gap-y-16 gap-x-36">
          <div className="flex flex-col items-center">
            <Image
              src="/assests/services/green/Block.png"
              alt="Road Block"
              width={48}
              height={48}
            />
            <span className="text-gray-200 text-xs">Road Block</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assests/services/green/EventSafety.png"
              alt="Event-Safety"
              width={48}
              height={48}
            />
            <span className="text-gray-200 text-xs">Event-Safety</span>
          </div>
        </div>

        {/* Single Item Section */}
        <div className="flex justify-center pt-5">
          <div className="flex flex-col items-center">
            <Image
              src="/assests/services/green/Escort.png"
              alt="Escort"
              width={48}
              height={48}
            />
            <span className="text-gray-200 text-xs">Escort</span>
          </div>
        </div>
      </div>

      {/* Large Image on the Right */}
      <div className="hidden md:flex w-full md:w-1/2 p-4 justify-center items-center">
        <Image
          src="/assests/services/Services.png" // Update this path as needed
          alt="Large Scene"
          width={600} // Customize the width as needed
          height={800} // Customize the height as needed
          objectFit="cover" // Adjust 'cover' to 'contain' if needed
        />
      </div>
    </div>
  );
};

export default GreenIcon;

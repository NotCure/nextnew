// RedIcon.js
import React from "react";
import Image from "next/image";

const RedIcon = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-4xl text-center text-white font-semibold mb-6">
          Traffic
        </h1>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col items-center">
            <Image
              src="/assests/services/red/Crashes.png"
              alt="Crashes"
              width={48}
              height={48}
            />
            <p className="mt-2 text-white">Crashes</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assests/services/red/Parking.png"
              alt="Parking"
              width={48}
              height={48}
            />
            <p className="mt-2 text-white">Parking</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assests/services/red/Traffic.png"
              alt="traffic"
              width={48}
              height={48}
            />
            <p className="mt-2 text-white">Traffic Jam</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assests/services/red/Wreck.png"
              alt="Wreck"
              width={48}
              height={48}
            />
            <p className="mt-2 text-white">Vehicle (Wreck)</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-full md:w-1/2 p-4 justify-center items-center">
        <Image
          src="/assests/services/Services.png" // Specific image for Red
          alt="Large Red Scene"
          width={500}
          height={600}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default RedIcon;

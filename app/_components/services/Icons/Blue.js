// BlueIcon.js
import React from "react";
import Image from "next/image";

const BlueIcon = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      <div className="hidden md:flex w-full md:w-1/2 p-4 justify-center items-center">
        <Image
          src="/assests/services/Services.png" // Update this path as needed
          alt="Large Blue Scene"
          width={500}
          height={600}
          objectFit="cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-4xl text-center text-white font-semibold mb-6">
          Theft
        </h1>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col items-center text-white">
            <Image
              src="/assests/services/blue/Theft.png"
              alt="Vehicle Theft"
              width={48}
              height={48}
            />
            <p className="mt-2 text-center">Vehicle Theft</p>
          </div>
          <div className="flex flex-col items-center text-white">
            <Image
              src="/assests/services/blue/Burglary.png"
              alt="Burglary"
              width={48}
              height={48}
            />
            <p className="mt-2">Burglary</p>
          </div>
          <div className="flex flex-col items-center text-white">
            <Image
              src="/assests/services/blue/Store.png"
              alt="Store Theft"
              width={48}
              height={48}
            />
            <p className="mt-2">Store Theft</p>
          </div>
          <div className="flex flex-col items-center text-white">
            <Image
              src="/assests/services/blue/Theft.png"
              alt="Item Theft"
              width={48}
              height={48}
            />
            <p className="mt-2">Item Theft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueIcon;

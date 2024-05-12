// BlueIcon.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
const BlueIcon = () => {
  const services = [
    {
      id: "Theft",
      name: "Vehicle Theft",
      image: "/assests/services/blue/Theft.png",
    },
    {
      id: "Burglary",
      name: "Burglary",
      image: "/assests/services/blue/Burglary.png",
    },
    {
      id: "Store",
      name: "Store Theft",
      image: "/assests/services/blue/Store.png",
    },
    {
      id: "ItemTheft",
      name: "Item Theft",
      image: "/assests/services/blue/ItemTheft.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-4xl text-center text-white font-semibold mb-6">
          Theft
        </h1>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/Services/${service.id}`}
              legacyBehavior
            >
              <a className="flex flex-col items-center text-white">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={48}
                  height={48}
                />
                <p className="mt-2 text-center">{service.name}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlueIcon;

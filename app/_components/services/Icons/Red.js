import React from "react";
import Image from "next/image";
import Link from "next/link";

const RedIcon = () => {
  const services = [
    {
      id: "Crashes",
      name: "Crashes",
      image: "/assests/services/red/Crashes.png",
    },
    {
      id: "Parking",
      name: "Parking",
      image: "/assests/services/red/Parking.png",
    },
    {
      id: "Traffic",
      name: "Traffic Jam",
      image: "/assests/services/red/Traffic.png",
    },
    {
      id: "Wreck",
      name: "Vehicle (Wreck)",
      image: "/assests/services/red/Wreck.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-4xl text-center text-white font-semibold mb-6">
          Traffic
        </h1>
        <div className="grid grid-cols-2 gap-6 mb-8">
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
                <p className="mt-2">{service.name}</p>
              </a>
            </Link>
          ))}
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

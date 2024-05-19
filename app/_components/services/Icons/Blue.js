"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BlueIcon = () => {
  const router = useRouter();

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

  const handleAppointmentClick = () => {
    router.push(`/Appointment/Make/blue`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-4xl text-center text-white dark:text-black font-semibold mb-6">
          Theft
        </h1>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/Services/${service.id}`}
              legacyBehavior
            >
              <a className="flex flex-col items-center dark:text-black text-white">
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
        <div className="flex justify-center">
          <button
            onClick={handleAppointmentClick}
            className="mt-2 text-gray-400 text-sm text-center"
          >
            Make an appointment
          </button>
        </div>
      </div>

      <div className="hidden md:flex w-full md:w-1/2 p-4 justify-center items-center">
        <Image
          src="/assests/services/Services.png"
          alt="Large Scene"
          width={600}
          height={800}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BlueIcon;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GreenIcon = () => {
  const router = useRouter();

  const services = [
    {
      id: "Block",
      name: "Road Block",
      image: "/assests/services/green/Block.png",
    },
    {
      id: "EventSafety",
      name: "Event Safety",
      image: "/assests/services/green/EventSafety.png",
    },
    {
      id: "Escort",
      name: "Escort",
      image: "/assests/services/green/Escort.png",
    },
  ];

  const handleAppointmentClick = () => {
    router.push(`/Appointment/Make/green`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center bg-cover bg-center">
      <div className=" bg-opacity-50 p-2 sm:p-4 sm:text-5xl rounded-lg w-full md:w-1/2">
        {/* Title Section */}
        <h1 className="text-white dark:text-black font-bold text-5xl sm:text-6xl">
          Requests
        </h1>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-36 p-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/Services/${service.id}`}
              legacyBehavior
            >
              <a className="flex flex-col items-center text-white dark:text-black">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={48}
                  height={48}
                  className="image-min-width"
                />
                <span className="text-white dark:text-black text-xs">
                  {service.name}
                </span>
              </a>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleAppointmentClick}
            className="mt-2 text-gray-300 text-sm text-center"
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

export default GreenIcon;

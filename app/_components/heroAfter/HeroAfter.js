import React from "react";
import Image from "next/image";
import TrafficCard from "./ServicesCards.js";

const HeroAfter = () => {
  const cardData = [
    {
      number: "01",
      title: "Traffic",
      imageSrc: "/assests/services/Services.png",
    },
    {
      number: "02",
      title: "Theft",
      imageSrc: "/assests/services/Services.png",
    },
    {
      number: "03",
      title: "Requests",
      imageSrc: "/assests/services/Services.png",
    },
  ];

  return (
    <>
      <div className="h-80 z-40 absolute -translate-y-24">
        <Image src="/assests/waves.svg" alt="wave" width={1920} height={1080} />

        <div className="flex justify-center items-center flex-col gap-7">
          <h1 className="text-white font-semibold opacity-50 text-3xl">
            Who We Are?
          </h1>
          <h1 className="text-white font-medium opacity-85 text-center text-4xl">
            We are a professional police force committed to
            <br /> safety, community, and modern policing with integrity.
          </h1>
          <button
            type="button"
            className="mt-7 select-none rounded-lg border border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <div className="opacity-50 hover:opacity-100">About Us</div>
          </button>
        </div>
        <div className="max-w-lg mx-auto mt-24">
          <Image
            src="/assests/services/Services.png"
            alt="image description"
            width={700}
            height={467}
            className="rounded-lg"
          />
        </div>
        {cardData.map((card, index) => (
          <TrafficCard key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default HeroAfter;

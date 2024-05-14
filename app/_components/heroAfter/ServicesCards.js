import React from "react";
import Image from "next/image";
import Link from "next/link";
const TrafficCard = ({ number, title, imageSrc }) => {
  return (
    <div className="mt-60 flex items-center justify-center">
      <div className="flex flex-col items-center text-white">
        <div>
          <h1 className="text-3xl font-semibold">{number}</h1>
          <h1 className="text-5xl font-bold">{title}</h1>
          <Link href="/Services">
            <button
              type="button"
              className="ml-5 mt-7 select-none rounded-2xl border border-white py-2 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              <div className="opacity-50 hover:opacity-100">View More</div>
            </button>
          </Link>
        </div>
      </div>
      {/* Image container */}
      <div className="ml-4 flex items-center">
        <Image
          src={`${imageSrc}`}
          alt={`${title} Image`}
          width={500}
          height={500}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default TrafficCard;

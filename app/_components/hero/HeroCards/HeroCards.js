import Link from "next/link";
import React from "react";

const HeroCards = ({ number, title, buttonText }) => {
  return (
    <div className="w-48 h-36 block rounded-3xl text-center border border-white text-surface shadow-secondary-1  text-white">
      <div className="px-6 py-6 flex flex-col items-center justify-center h-full ">
        <h5 className="text-lg mt-3 font-bold leading-tight">{number}</h5>

        <h5 className="mb-4 text-3xl font-bold leading-tight">{title}</h5>

        <Link href={`/Services`}>
          <button
            type="button"
            className="mb-2 inline-block border border-white rounded-3xl px-10 py-1 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 "
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            Visit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroCards;

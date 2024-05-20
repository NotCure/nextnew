import React from "react";
import Link from "next/link";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";

const Non = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center flex-col items-center pt-24">
        <h1 className="text-4xl text-blue-400 ">
          Please Login Before Creating An Appointment
        </h1>
        <Link href="/Login">
          <button
            className={`text-white dark:text-black border-white dark:border-black select-none rounded-lg mt-20 border py-5 px-10 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
          >
            Login
          </button>
        </Link>
      </div>
    </>
  );
};

export default Non;

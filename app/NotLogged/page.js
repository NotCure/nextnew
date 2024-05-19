import React from "react";

import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";

const Non = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center items-center pt-24">
        <h1 className="text-4xl text-blue-400 ">
          Please Login Before Creating An Appointment
        </h1>
      </div>
    </>
  );
};

export default Non;

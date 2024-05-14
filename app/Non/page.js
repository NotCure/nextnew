import React from "react";

import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";

const Non = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center items-center pt-24">
        <h1 className="text-4xl text-red-600 ">
          You are not authorized to enter this page, Please Login as admin
        </h1>
      </div>
    </>
  );
};

export default Non;

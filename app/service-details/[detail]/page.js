"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

import Title from "@/app/_components/title/Title";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import TypeOne from "@/app/_components/report/TypeOne";

const ServiceDetail = () => {
  const pathname = usePathname();
  const service = pathname.split("/").pop();

  let imagePath;
  if (["Theft", "Burglary", "Store", "ItemTheft"].includes(service)) {
    imagePath = `/assests/services/blue/${service}.png`;
  } else if (["Block", "EventSafety", "Escort"].includes(service)) {
    imagePath = `/assests/services/green/${service}.png`;
  } else if (["Crashes", "Parking", "Traffic", "Wreck"].includes(service)) {
    imagePath = `/assests/services/red/${service}.png`;
  }

  const renderReportType = () => {
    return <TypeOne />;
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <Image src={imagePath} alt={service} width={200} height={200} />
          <Title title={service} />
          {renderReportType()}
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;

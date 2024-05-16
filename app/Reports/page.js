"use client";
import React, { useState } from "react";
import Navbar from "@/app/_components/navbar/navbar";
import dynamic from "next/dynamic";

import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
const ReportMap = dynamic(() => import("@/app/_components/Map/ReportMap"), {
  ssr: false,
});
import ReportTable from "@/app/_components/Map/ReportTable";

export default function Reports() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <>
      <Header />
      <Navbar />
      <Title title="Reports" />
      <div className="mt-8">
        <ReportTable onSelectLocation={handleSelectLocation} />
      </div>
      <div className="mt-8">
        <ReportMap selectedLocation={selectedLocation} />
      </div>
    </>
  );
}

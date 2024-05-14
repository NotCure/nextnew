"use client";
import React, { useState } from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import ReportMap from "@/app/_components/Map/ReportMap";
import ReportTable from "@/app/_components/Map/ReportTable";

export default function Services() {
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

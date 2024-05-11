import React from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import Choices from "@/app/_components/services/Services";

export default function Services() {
  return (
    <>
      <Header />
      <Navbar />
      <Title title="Services" />
      <Choices />
    </>
  );
}

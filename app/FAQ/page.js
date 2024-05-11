import React from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";

import FaqsCard from "@/app/_components/faq/faq";

export default function Services() {
  return (
    <>
      <Header />
      <Navbar />
      <Title title="Frequently Asked Questions" />

      <FaqsCard />
    </>
  );
}

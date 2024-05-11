import React from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import News from "@/app/_components/news/news";

export default function NewsPage() {
  return (
    <>
      <Header />
      <Navbar />
      <Title title="News" />
      <div className="flex justify-center">
        <div className="grid gap-20 p-4 md:grid-cols-2 sm:grid-cols-1 max-w-7xl ">
          <News />
          <News />
          <News />
        </div>
      </div>
    </>
  );
}

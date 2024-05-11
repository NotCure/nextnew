import React from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from '@/app/_components/title/Title'
import Image from "next/image";
import Posts from '@/app/_components/aboutus/posts'

export default function AboutUs() {
  return (
    <>
      <Header />
      <Navbar /> 
      <Title title="About Us"/>
      <Posts />

    </>
  );
}

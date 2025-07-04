"use client";
import React from "react";
import Image from "next/image";
import Header from "@/app/_components/header/Header";
import Navbar from "@/app/_components/navbar/navbar";
import Hero from "@/app/_components/hero/Hero";
import HeroAfter from "@/app/_components/heroAfter/HeroAfter";
import { useTheme } from "next-themes";

import styles from "./_css/background.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { arrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className=" overflow-x-hidden overflow-y-hidden transition-all">
      <div
        className={
          theme === "dark" ? styles.background_white : styles.background
        }
      >
        <div className={styles.gradientBack}>
          <Header />
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="hidden md:block">
        <HeroAfter />
      </div>
    </div>
  );
}

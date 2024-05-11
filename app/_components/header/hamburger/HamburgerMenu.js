"use client";

import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import Sidebar from "./Sidebar";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerButton isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default HamburgerMenu;

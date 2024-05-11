import React from "react";
import Image from "next/image"; // Corrected the import statement here

const HamburgerButton = ({ isOpen, toggleSidebar }) => {
  return (
    <button
      className={`hamburger-menu z-20 ${
        isOpen ? "rotate-90" : "rotate-0"
      } transition-transform duration-300 ease-in-out`}
      onClick={toggleSidebar}
    >
      <Image
        src="/logos/HamburgerWhite.png"
        alt="Hamburger Menu"
        width={45}
        height={45}
        layout="fixed"
      />
    </button>
  );
};

export default HamburgerButton;

import React from "react";
import Image from "next/image"; // Corrected the import statement here
import { useTheme } from "next-themes";

const HamburgerButton = ({ isOpen, toggleSidebar }) => {
  const { theme } = useTheme();

  return (
    <button
      className={`hamburger-menu z-50 ${
        isOpen ? "rotate-90" : "rotate-0"
      } transition-transform duration-300 ease-in-out`}
      onClick={toggleSidebar}
    >
      <Image
        src={
          theme === "dark"
            ? "/logos/HamburgerBlack.png"
            : "/logos/HamburgerWhite.png"
        }
        alt="Hamburger Menu"
        width={45}
        height={45}
      />
    </button>
  );
};

export default HamburgerButton;

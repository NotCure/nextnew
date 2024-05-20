// MainLogo.js
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const MainLogo = ({ className }) => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const logoSrc = isHomePage
    ? "/logos/LogoHWhite.svg"
    : theme === "dark"
    ? "/logos/LogoHBlack.svg"
    : "/logos/LogoHWhite.svg";

  return (
    <div
      className={`${className} h-auto w-auto relative justify-center flex z-50`}
    >
      <Link
        href="/"
        className="text-white font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        <Image
          src={logoSrc}
          alt="Logo"
          width={125}
          height={125}
          className="md:w-40"
        />
      </Link>
    </div>
  );
};

export default MainLogo;

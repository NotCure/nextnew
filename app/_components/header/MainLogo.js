// MainLogo.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainLogo = ({ className }) => {
  return (
    <div
      className={`${className} h-auto w-auto relative justify-center flex z-20`}
    >
      <Link
        href="/"
        className="text-white  font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        <Image
          src="/logos/LogoHWhite.svg"
          alt="LogoHWhite"
          width={125}
          height={125}
          layout="fixed"
          className="md:w-40"
        />
      </Link>
    </div>
  );
};

export default MainLogo;

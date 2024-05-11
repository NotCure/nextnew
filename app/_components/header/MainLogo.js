// MainLogo.js
import React from "react";
import Image from "next/image";

const MainLogo = ({ className }) => {
  return (
    <div
      className={`${className} h-auto w-auto relative justify-center flex z-20`}
    >
      <Image
        src="/logos/LogoHWhite.svg"
        alt="LogoHWhite"
        width={125}
        height={125}
        layout="fixed"
        className="md:w-40"
      />
    </div>
  );
};

export default MainLogo;

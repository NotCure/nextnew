import React from "react";
import Image from "next/image";

const AdditionalLogo = () => {
  return (
    <div className="h-6 w-auto relative z-10 ">
      <Image
        src="/assests/searchW.svg"
        alt="Additional Logo"
        className="opacity-0"
        width={34}
        height={34}
        
      />
    </div>
  );
};

export default AdditionalLogo;

// Header.js
import React from "react";
import MainLogo from "./MainLogo";
import AdditionalLogo from "./AdditionalLogo";
import HamburgerMenu from "./hamburger/HamburgerMenu";

const Header = () => {
  return (
    <header className=" py-4 w-full flex items-center justify-between md:justify-start md:pl-4">
      {/* Mobile components */}
      <div className="md:hidden flex justify-between w-full px-3 items-center">
        <HamburgerMenu />
        <MainLogo className="md:hidden" />

        <AdditionalLogo />
      </div>
      {/* Mobile components */}

      {/* Desktop logo */}
      <MainLogo className="hidden md:block pl-3" />
      {/* Desktop logo */}
    </header>
  );
};

export default Header;

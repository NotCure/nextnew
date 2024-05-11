// Navbar.js
import React from "react";
import NavigationLinks from "./NavigationLinks";
import ActionButtons from "./ActionButtons";

const Navbar = () => {
  return (
    <nav>
      <div className="hidden md:flex items-center justify-between py-2 px-9 w-full ">
        <NavigationLinks />
        <ActionButtons />
      </div>
    </nav>
  );
};

export default Navbar;

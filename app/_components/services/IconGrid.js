// IconGrid.js
import React from "react";
import RedIcon from "./Icons/Red";
import BlueIcon from "./Icons/Blue";
import GreenIcon from "./Icons/Green";

const IconGrid = () => {
  return (
    <div className="w-full space-y-24">
      <RedIcon />
      <BlueIcon />
      <GreenIcon />
    </div>
  );
};

export default IconGrid;

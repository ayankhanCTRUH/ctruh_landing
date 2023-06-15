import React from "react";
import "./Banner.css";
import LeftPart from "./LeftPart/LeftPart";
import RightPart from "./RightPart/RightPart";
function Banner() {
  return (
    <>
      <div className="mainContainer">
        <div className="leftPartContainer">
          <LeftPart />
        </div>
        <div className="rightPartContainer">
          <RightPart />
        </div>
      </div>
    </>
  );
}

export default Banner;

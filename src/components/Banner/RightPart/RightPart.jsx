import React from "react";
import "./RightPart.css";
import Lottie from "react-lottie";
import animationDataRocket from "./139799-3d-accelerate-success.json";

function RightPart() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataRocket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="rightMainContainer">
      <div className="glass">
        <div className="glassInner">
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      </div>
      <div className="circle"></div>
      <div className="semicircle"></div>
      <div className="triangle"></div>
    </div>
  );
}

export default RightPart;

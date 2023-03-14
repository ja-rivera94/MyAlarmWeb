import React from "react";
import Frame86 from "../Frame86";
import "./Frame317.css";

function Frame317(props) {
  const { className, frame86Props } = props;

  return (
    <div className={`frame-317 ${className || ""}`}>
      <div className="frame-89">
        <Frame86>{frame86Props.children}</Frame86>
        <div className="back-in-black oxygen-normal-white-16px">Back in black</div>
      </div>
      <img className="fi-sr-angle-small-right" src="/img/fi-sr-angle-small-right-6.svg" alt="fi-sr-angle-small-right" />
    </div>
  );
}

export default Frame317;

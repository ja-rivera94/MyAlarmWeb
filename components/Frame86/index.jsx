import React from "react";
import "./Frame86.css";

function Frame86(props) {
  const { children } = props;

  return (
    <div className="frame-86">
      <div className="sonido oxygen-bold-white-18px-2">{children}</div>
    </div>
  );
}

export default Frame86;

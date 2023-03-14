import React from "react";
import "./Frame323.css";

function Frame323(props) {
  const { children, className } = props;

  return (
    <div className={`frame-323 ${className || ""}`}>
      <div className="jue">{children}</div>
    </div>
  );
}

export default Frame323;

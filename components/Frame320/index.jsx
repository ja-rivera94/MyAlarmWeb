import React from "react";
import "./Frame320.css";

function Frame320(props) {
  const { children, className } = props;

  return (
    <div className={`frame-32-4-1 ${className || ""}`}>
      <div className="lun">{children}</div>
    </div>
  );
}

export default Frame320;

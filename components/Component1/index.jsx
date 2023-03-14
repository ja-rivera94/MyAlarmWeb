import React from "react";
import "./Component1.css";

function Component1(props) {
  const { children } = props;

  return (
    <div className="component-1">
      <div className="activity oxygen-bold-white-16px">{children}</div>
    </div>
  );
}

export default Component1;

import React from "react";
import "./Input2.css";

function Input2(props) {
  const { children, className } = props;

  return (
    <div className={`input-email-2 ${className || ""}`}>
      <div className="email-2 inter-semi-bold-white-16px"></div>
      <div className="input-2"><input type="password" name="name" className="email" /></div>
    </div>
  );
}

export default Input2;

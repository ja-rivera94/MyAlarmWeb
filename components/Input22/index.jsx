import React from "react";
import "./Input22.css";

function Input22(props) {
  const { email, johnDoeGmailCom, className } = props;

  return (
    <div className={`input-email ${className || ""}`}>
      <div className="email inter-semi-bold-white-16px">{email}</div>
      <div className="input">
        <div className="johndoegmailcom inter-normal-white-16px">
        <input type="text" name="name" className="email" />
        </div>
      </div>
    </div>
  );
}

export default Input22;

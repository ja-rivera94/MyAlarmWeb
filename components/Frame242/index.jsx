import React from "react";
import "./Frame242.css";

function Frame242(props) {
  const { className } = props;

  return (
    <div className={`frame-242 ${className || ""}`}>
      <div className="frame-237">
        <div className="overlap-group-6">
          <div className="ellipse-5-4"></div>
          <img className="icon-mail" src="/img/vuesax-bold-sms.svg" alt="icon-mail" />
        </div>
      </div>
      <div className="correo oxygen-bold-white-14px">Correo</div>
    </div>
  );
}

export default Frame242;

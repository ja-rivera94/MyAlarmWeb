import React from "react";
import Frame67 from "../Frame67";
import "./Frame318.css";

function Frame318(props) {
  const { className, frame67Props } = props;

  return (
    <div className={`frame-318 ${className || ""}`}>
      <div className="notificacin-por-correo oxygen-bold-white-18px-2">Notificación por correo</div>
      <Frame67 className={frame67Props.className} />
    </div>
  );
}

export default Frame318;

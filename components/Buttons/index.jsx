import React from "react";
import "./Buttons.css";

function Buttons(props) {
  const { className } = props;

  return (
    <div className={`buttons ${className || ""}`}>
      <div className="crear-alarma-compartida oxygen-bold-white-16px">Crear Alarma Compartida</div>
    </div>
  );
}

export default Buttons;

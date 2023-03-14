import React from "react";
import { Link } from "react-router-dom";
import "./Buttons2.css";

function Buttons2(props) {
  const { className } = props;

  return (
    <Link to="/crear-alarmas-compartidas">
      <div className={`buttons-3 ${className || ""}`}>
        <div className="find-out-more oxygen-bold-white-16px">Confirmar</div>
      </div>
    </Link>
  );
}

export default Buttons2;

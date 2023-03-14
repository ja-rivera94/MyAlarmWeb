import React from "react";
import Frame242 from "../Frame242";
import "./Group68681.css";

function Group68681(props) {
  const { className, frame242Props } = props;

  return (
    <div className={`group-68681 ${className || ""}`}>
      <Frame242 className={frame242Props.className} />
      <div className="frame-241">
        <div className="frame-239">
          <div className="overlap-group-5">
            <div className="ellipse-5-1"></div>
            <img className="contactos" src="/img/contactos.svg" alt="Contactos" />
          </div>
        </div>
        <div className="contactos-1 oxygen-bold-white-14px">Contactos</div>
      </div>
    </div>
  );
}

export default Group68681;

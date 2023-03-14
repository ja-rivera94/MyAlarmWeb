import React from "react";
import Frame672 from "../Frame672";
import "./Frame336.css";

function Frame336(props) {
  const { className } = props;

  return (
    <div className={`frame-336 ${className || ""}`}>
      <div className="overlap-group2-3">
        <div className="group-6">
          <div className="overlap-group-14">
            <div className="ellipse-5-9"></div>
            <img className="ellipse-4-3" src="/img/ellipse-4-7.svg" alt="Ellipse 4" />
            <img className="vector-4-3" src="/img/vector-4-3.svg" alt="Vector 4" />
            <img className="vector-5-3" src="/img/vector-5-3.svg" alt="Vector 5" />
          </div>
        </div>
        <div className="am-12 valign-text-middle oxygen-bold-cloud-16px">AM</div>
        <div className="rutina-diaria valign-text-middle oxygen-normal-cloud-10px">Rutina Diaria</div>
        <div className="lun-mar-mie-sab valign-text-middle oxygen-normal-cloud-12px">Lun, Mar, Mie, Sab</div>
        <div className="text-6 valign-text-middle oxygen-bold-cloud-40px">6:30</div>
        <div className="x12h-28m-1 valign-text-middle oxygen-normal-cloud-12px">12h 28m</div>
        <Frame672 />
      </div>
    </div>
  );
}

export default Frame336;

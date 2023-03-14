import React from "react";
import { Link } from "react-router-dom";
import Buttons42 from "../Buttons42";
import Frame67 from "../Frame67";
import Frame336 from "../Frame336";
import "./Alarmas2.css";

function Alarmas2(props) {
  const {
    rectangle3772,
    sun11,
    mantenteSiempreEn,
    exploraLaCapacidad,
    am,
    ejercicios,
    lunMarMieDom,
    text18,
    x12H28M,
    alarmasActivas,
    crear,
    crearAlarma,
    frame336Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="alarmas screen">
        <div className="overlap-group3-7">
          <div className="rectangle-3782-9"></div>
          <div className="group-68686-9">
            <div className="overlap-group-31">
              <img className="icon-clock-9" src="/img/fi-sr-alarm-clock-8.svg" alt="icon-clock" />
              <img className="oval-12" src="/img/oval-1.svg" alt="Oval" />
            </div>
            <Link to="/calendario">
              <img className="icon-3" src="/img/vuesax-bold-calendar-1.svg" alt="icon-calendar" />
            </Link>
            <Link to="/alarmas-compartidas">
              <img className="icon-3" src="/img/vuesax-bold-profile-2user-3.svg" alt="icon-user" />
            </Link>
            <img className="icon-star-9" src="/img/vuesax-bold-star-1.svg" alt="icon-star" />
          </div>
          <img className="logo-10" src="/img/logo-1.svg" alt="logo" />
        </div>
        <div className="overlap-group4-7">
          <div className="mask-group-6">
            <img className="rectangle-3772-8" src={rectangle3772} alt="Rectangle 3772" />
            <img className="sun1-1-6" src={sun11} alt="sun1 1" />
          </div>
          <p className="mantente-siempre-en-1 oxygen-bold-white-24px">{mantenteSiempreEn}</p>
          <p className="explora-la-capacidad-5 oxygen-normal-white-16px">{exploraLaCapacidad}</p>
          <Buttons42 />
          <div className="overlap-group1-14">
            <div className="rectangle-217-7"></div>
            <div className="group-17">
              <div className="overlap-group-32">
                <div className="rectangle-1611-8"></div>
                <div className="ellipse-5-18"></div>
                <img className="ellipse-4-12" src="/img/ellipse-4-18.svg" alt="Ellipse 4" />
                <img className="vector-4-12" src="/img/vector-4-12.svg" alt="Vector 4" />
                <img className="vector-5-14" src="/img/vector-5-12.svg" alt="Vector 5" />
                <div className="am-23 valign-text-middle oxygen-bold-white-16px">{am}</div>
                <div className="ejercicios-8 valign-text-middle oxygen-normal-white-10px">{ejercicios}</div>
                <div className="lun-mar-mie-dom-3 valign-text-middle oxygen-normal-white-12px">{lunMarMieDom}</div>
                <h1 className="text-18 valign-text-middle oxygen-bold-white-40px">{text18}</h1>
                <div className="x12h-28m-8 valign-text-middle oxygen-normal-white-12px">{x12H28M}</div>
                <Frame67 />
              </div>
            </div>
          </div>
          <Frame336 className={frame336Props.className} />
          <div className="alarmas-activas-3 oxygen-bold-white-24px">{alarmasActivas}</div>
          <div className="crear-13 oxygen-bold-white-18px">{crear}</div>
          <div className="rectangle-3785-4"></div>
          <img className="crear-alarma" src={crearAlarma} alt="Crear alarma" />
        </div>
      </div>
    </div>
  );
}

export default Alarmas2;

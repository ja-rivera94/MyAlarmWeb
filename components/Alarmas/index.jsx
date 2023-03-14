import React from "react";
import { Link } from "react-router-dom";
import Frame67 from "../Frame67";
import Frame336 from "../Frame336";
import "./Alarmas.css";

function Alarmas(props) {
  const {
    alarmasActivas,
    crear,
    am,
    ejercicios,
    lunMarMieDom,
    text14,
    x12H28M,
    rectangle3772,
    sun11,
    mantenteSiempreEn,
    exploraLaCapacidad,
    nuevaAlarma,
    frame336Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="alarmas-2 screen">
        <div className="overlap-group3-6">
          <div className="rectangle-3782-7"></div>
          <div className="group-68686-7">
            <div className="overlap-group-27">
              <img className="icon-clock-7" src="/img/fi-sr-alarm-clock-3.svg" alt="icon-clock" />
              <img className="oval-11" src="/img/oval.svg" alt="Oval" />
            </div>
            <Link to="/calendario">
              <img className="icon-2" src="/img/vuesax-bold-calendar-1.svg" alt="icon-calendar" />
            </Link>
            <Link to="/alarmas-compartidas">
              <img className="icon-2" src="/img/vuesax-bold-profile-2user-3.svg" alt="icon-user" />
            </Link>
            <Link to="/alarmas-sugeridas">
              <img className="icon-star-7" src="/img/vuesax-bold-star-1.svg" alt="icon-star" />
            </Link>
          </div>
          <img className="logo-8" src="/img/logo-1.svg" alt="logo" />
        </div>
        <div className="flex-col-24">
          <div className="flex-row-25">
            <div className="alarmas-activas-2 oxygen-bold-white-24px">{alarmasActivas}</div>
            <Link to="/alarmas">
              <div className="crear-11 oxygen-bold-white-18px">{crear}</div>
            </Link>
          </div>
          <div className="overlap-group1-12">
            <div className="rectangle-217-5"></div>
            <div className="group-15">
              <div className="overlap-group-28">
                <div className="rectangle-1611-6"></div>
                <div className="ellipse-5-16"></div>
                <img className="ellipse-4-10" src="/img/ellipse-4-9.svg" alt="Ellipse 4" />
                <img className="vector-4-10" src="/img/vector-4-5.svg" alt="Vector 4" />
                <img className="vector-5-12" src="/img/vector-5-5.svg" alt="Vector 5" />
                <div className="am-21 valign-text-middle oxygen-bold-white-16px">{am}</div>
                <div className="ejercicios-7 valign-text-middle oxygen-normal-white-10px">{ejercicios}</div>
                <div className="lun-mar-mie-dom-2 valign-text-middle oxygen-normal-white-12px">{lunMarMieDom}</div>
                <h1 className="text-14 valign-text-middle oxygen-bold-white-40px">{text14}</h1>
                <div className="x12h-28m-7 valign-text-middle oxygen-normal-white-12px">{x12H28M}</div>
                <Frame67 />
              </div>
            </div>
          </div>
          <Frame336 className={frame336Props.className} />
        </div>
        <div className="flex-col-25">
          <div className="mask-group-4">
            <img className="rectangle-3772-6" src={rectangle3772} alt="Rectangle 3772" />
            <img className="sun1-1-4" src={sun11} alt="sun1 1" />
          </div>
          <p className="mantente-siempre-en oxygen-bold-white-24px">{mantenteSiempreEn}</p>
          <p className="explora-la-capacidad-3 oxygen-normal-white-16px">{exploraLaCapacidad}</p>
          <Link to="/alarmas">
            <div className="buttons-8">
              <div className="nueva-alarma oxygen-bold-white-16px">{nuevaAlarma}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Alarmas;

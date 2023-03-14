import React from "react";
import { Link } from "react-router-dom";
import Frame67 from "../Frame67";
import Buttons from "../Buttons";
import "./AlarmasCompartidas.css";

function AlarmasCompartidas(props) {
  const {
    alarmasCompartidas,
    crear,
    am,
    disearFlujoUx,
    jueves,
    text13,
    unsplashSyhuhse5Ut8,
    name,
    sun11,
    rectangle3772,
    conectaConTusPers,
    exploraLaCapacidad,
    buttonsProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="alarmas-compartidas-4 screen">
        <div className="overlap-group2-8">
          <div className="rectangle-3782-5"></div>
          <img className="logo-6" src="/img/logo-1.svg" alt="logo" />
          <div className="group-68686-5">
            <Link to="/hub-2">
              <img className="icon-clock-5" src="/img/fi-sr-alarm-clock-2.svg" alt="icon-clock" />
            </Link>
            <Link to="/calendario">
              <img className="icon-calendar-2" src="/img/vuesax-bold-calendar-1.svg" alt="icon-calendar" />
            </Link>
            <Link to="/alarmas-compartidas">
              <img
                className="vuesaxboldprofile-2user-3"
                src="/img/vuesax-bold-profile-2user-6.svg"
                alt="vuesax/bold/profile-2user"
              />
            </Link>
            <Link to="/alarmas-sugeridas">
              <img className="icon-star-5" src="/img/vuesax-bold-star-1.svg" alt="icon-star" />
            </Link>
          </div>
        </div>
        <div className="flex-col-20">
          <div className="flex-row-18">
            <div className="flex-col-21">
              <div className="flex-row-19">
                <div className="alarmas-compartidas-5 oxygen-bold-white-24px">{alarmasCompartidas}</div>
                <Link to="/crear-alarmas-compartidas">
                  <div className="crear-9 oxygen-bold-white-18px">{crear}</div>
                </Link>
              </div>
              <div className="overlap-group1-11">
                <div className="rectangle-217-4"></div>
                <div className="group-14">
                  <div className="overlap-group-23">
                    <div className="rectangle-1611-5"></div>
                    <div className="ellipse-5-15"></div>
                    <img className="ellipse-4-9" src="/img/ellipse-4-14.svg" alt="Ellipse 4" />
                    <img className="vector-4-9" src="/img/vector-4-8.svg" alt="Vector 4" />
                    <img className="vector-5-11" src="/img/vector-5-8.svg" alt="Vector 5" />
                    <div className="am-20 valign-text-middle oxygen-bold-white-16px">{am}</div>
                    <div className="disear-flujo-ux-4 valign-text-middle oxygen-normal-white-10px">{disearFlujoUx}</div>
                    <div className="jueves-4 valign-text-middle oxygen-normal-white-12px">{jueves}</div>
                    <h1 className="text-13 valign-text-middle oxygen-bold-white-40px">{text13}</h1>
                    <Frame67 />
                  </div>
                  <div className="frame-27-4">
                    <img className="unsplashs-yh-uhse5u-t8-2" src={unsplashSyhuhse5Ut8} alt="unsplash:sYhUhse5uT8" />
                    <div className="frame-26-2">
                      <div className="name-13 oxygen-bold-white-18px-2">{name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mask-group-2">
              <img className="sun1-1-2" src={sun11} alt="sun1 1" />
              <img className="rectangle-3772-4" src={rectangle3772} alt="Rectangle 3772" />
            </div>
          </div>
          <p className="conecta-con-tus-pers-2 oxygen-bold-white-24px">{conectaConTusPers}</p>
          <p className="explora-la-capacidad-2 oxygen-normal-white-16px">{exploraLaCapacidad}</p>
          <Buttons className={buttonsProps.className} />
        </div>
      </div>
    </div>
  );
}

export default AlarmasCompartidas;

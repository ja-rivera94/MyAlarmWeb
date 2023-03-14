import React from "react";
import { Link } from "react-router-dom";
import Frame67 from "../Frame67";
import Buttons from "../Buttons";
import Frame311 from "../Frame311";
import Frame313 from "../Frame313";
import Frame331 from "../Frame331";
import Buttons2 from "../Buttons2";
import Group68681 from "../Group68681";
import Frame317 from "../Frame317";
import Frame318 from "../Frame318";
import "./CrearAlarmasCompartidasCorreo.css";

function CrearAlarmasCompartidasCorreo(props) {
  const {
    alarmasCompartidas,
    crear,
    am,
    disearFlujoUx,
    jueves,
    text16,
    unsplashSyhuhse5Ut8,
    name,
    sun11,
    rectangle3772,
    conectaConTusPers,
    exploraLaCapacidad,
    nombreDeLaAlarma,
    ingresaUnaDireccinDeCorreo,
    correo,
    frame331Props,
    buttons2Props,
    group68681Props,
    frame317Props,
    frame318Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="crear-alarmas-compartidas-correo screen">
        <div className="overlap-group7-5">
          <div className="rectangle-3782-8"></div>
          <img className="logo-9" src="/img/logo-1.svg" alt="logo" />
          <div className="group-68686-8">
            <img className="icon-clock-8" src="/img/fi-sr-alarm-clock-6.svg" alt="icon-clock" />
            <Link to="/calendario">
              <img className="icon-calendar-4" src="/img/vuesax-bold-calendar-1.svg" alt="icon-calendar" />
            </Link>
            <Link to="/alarmas-compartidas">
              <img
                className="vuesaxboldprofile-2user-4"
                src="/img/vuesax-bold-profile-2user-5.svg"
                alt="vuesax/bold/profile-2user"
              />
            </Link>
            <img className="icon-star-8" src="/img/vuesax-bold-star-1.svg" alt="icon-star" />
          </div>
        </div>
        <div className="overlap-group6-4">
          <div className="alarmas-compartidas-6 oxygen-bold-white-24px">{alarmasCompartidas}</div>
          <div className="crear-12 oxygen-bold-white-18px">{crear}</div>
          <div className="overlap-group1-13">
            <div className="rectangle-217-6"></div>
            <div className="group-16">
              <div className="overlap-group-29">
                <div className="rectangle-1611-7"></div>
                <div className="ellipse-5-17"></div>
                <img className="ellipse-4-11" src="/img/ellipse-4-11.svg" alt="Ellipse 4" />
                <img className="vector-4-11" src="/img/vector-4-7.svg" alt="Vector 4" />
                <img className="vector-5-13" src="/img/vector-5-7.svg" alt="Vector 5" />
                <div className="am-22 valign-text-middle oxygen-bold-white-16px">{am}</div>
                <div className="disear-flujo-ux-5 valign-text-middle oxygen-normal-white-10px">{disearFlujoUx}</div>
                <div className="jueves-5 valign-text-middle oxygen-normal-white-12px">{jueves}</div>
                <h1 className="text-16 valign-text-middle oxygen-bold-white-40px">{text16}</h1>
                <Frame67 />
              </div>
              <div className="frame-27-5">
                <img className="unsplashs-yh-uhse5u-t8-3" src={unsplashSyhuhse5Ut8} alt="unsplash:sYhUhse5uT8" />
                <div className="frame-26-3">
                  <div className="name-14 oxygen-bold-white-18px-2">{name}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mask-group-5">
            <img className="sun1-1-5" src={sun11} alt="sun1 1" />
            <img className="rectangle-3772-7" src={rectangle3772} alt="Rectangle 3772" />
          </div>
          <p className="conecta-con-tus-pers-3 oxygen-bold-white-24px">{conectaConTusPers}</p>
          <p className="explora-la-capacidad-4 oxygen-normal-white-16px">{exploraLaCapacidad}</p>
          <Buttons />
          <div className="rectangle-3785-3"></div>
          <div className="frame-368-2">
            <Frame311 />
            <div className="overlap-group5-5">
              <Frame313 />
              <div className="nombre-de-la-alarma-2 oxygen-bold-white-18px-2">{nombreDeLaAlarma}</div>
              <Frame331
                frame86Props={frame331Props.frame86Props}
                frame3201Props={frame331Props.frame3201Props}
                frame3202Props={frame331Props.frame3202Props}
                frame3231Props={frame331Props.frame3231Props}
                frame3232Props={frame331Props.frame3232Props}
                frame3203Props={frame331Props.frame3203Props}
              />
              <div className="frame-332">
                <div className="overlap-group4-6">
                  <div className="frame-312">
                    <p className="ingresa-una-direccin-de-correo">{ingresaUnaDireccinDeCorreo}</p>
                    <img className="fi-sr-pencil" src="/img/fi-sr-pencil.svg" alt="fi-sr-pencil" />
                  </div>
                  <div className="overlap-group-30">
                    <div className="correo-3">{correo}</div>
                  </div>
                  <Buttons2 className={buttons2Props.className} />
                </div>
              </div>
            </div>
            <Group68681 className={group68681Props.className} frame242Props={group68681Props.frame242Props} />
            <Frame317 className={frame317Props.className} frame86Props={frame317Props.frame86Props} />
            <Frame318 className={frame318Props.className} frame67Props={frame318Props.frame67Props} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearAlarmasCompartidasCorreo;

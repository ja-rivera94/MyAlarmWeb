import React from "react";
import { Link } from "react-router-dom";
import Frame67 from "../Frame67";
import Buttons from "../Buttons";
import Frame313 from "../Frame313";
import Frame331 from "../Frame331";
import Frame317 from "../Frame317";
import Frame318 from "../Frame318";
import "./CrearAlarmasCompartidas.css";

function CrearAlarmasCompartidas(props) {
  const {
    alarmasCompartidas,
    crear1,
    am,
    disearFlujoUx,
    jueves,
    text21,
    unsplashSyhuhse5Ut8,
    name,
    sun11,
    rectangle3772,
    conectaConTusPers,
    exploraLaCapacidad,
    cancelar,
    crear2,
    guardar,
    nombreDeLaAlarma,
    correo,
    contactos2,
    frame313Props,
    frame331Props,
    frame317Props,
    frame318Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="crear-alarmas-compartidas screen">
        <div className="overlap-group4-8">
          <div className="rectangle-3782-10"></div>
          <img className="logo-11" src="/img/logo-1.svg" alt="logo" />
          <div className="group-68686-10">
            <img className="icon-clock-10" src="/img/fi-sr-alarm-clock-8.svg" alt="icon-clock" />
            <Link to="/calendario">
              <img className="icon-calendar-5" src="/img/vuesax-bold-calendar-1.svg" alt="icon-calendar" />
            </Link>
            <Link to="/alarmas-compartidas">
              <img
                className="vuesaxboldprofile-2user-5"
                src="/img/vuesax-bold-profile-2user-9.svg"
                alt="vuesax/bold/profile-2user"
              />
            </Link>
            <img className="icon-star-10" src="/img/vuesax-bold-star-1.svg" alt="icon-star" />
          </div>
        </div>
        <div className="overlap-group5-6">
          <div className="alarmas-compartidas-7 oxygen-bold-white-24px">{alarmasCompartidas}</div>
          <div className="crear-14 oxygen-bold-white-18px">{crear1}</div>
          <div className="overlap-group1-15">
            <div className="rectangle-217-8"></div>
            <div className="group-18">
              <div className="overlap-group-34">
                <div className="rectangle-1611-9"></div>
                <div className="ellipse-5-19"></div>
                <img className="ellipse-4-13" src="/img/ellipse-4-20.svg" alt="Ellipse 4" />
                <img className="vector-4-13" src="/img/vector-4-14.svg" alt="Vector 4" />
                <img className="vector-5-15" src="/img/vector-5-14.svg" alt="Vector 5" />
                <div className="am-24 valign-text-middle oxygen-bold-white-16px">{am}</div>
                <div className="disear-flujo-ux-6 valign-text-middle oxygen-normal-white-10px">{disearFlujoUx}</div>
                <div className="jueves-6 valign-text-middle oxygen-normal-white-12px">{jueves}</div>
                <h1 className="text-21 valign-text-middle oxygen-bold-white-40px">{text21}</h1>
                <Frame67 />
              </div>
              <div className="frame-27-6">
                <img className="unsplashs-yh-uhse5u-t8-4" src={unsplashSyhuhse5Ut8} alt="unsplash:sYhUhse5uT8" />
                <div className="frame-26-4">
                  <div className="name-15 oxygen-bold-white-18px-2">{name}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mask-group-7">
            <img className="sun1-1-7" src={sun11} alt="sun1 1" />
            <img className="rectangle-3772-9" src={rectangle3772} alt="Rectangle 3772" />
          </div>
          <p className="conecta-con-tus-pers-4 oxygen-bold-white-24px">{conectaConTusPers}</p>
          <p className="explora-la-capacidad-6 oxygen-normal-white-16px">{exploraLaCapacidad}</p>
          <Buttons />
          <div className="rectangle-3785-5"></div>
          <div className="frame-368-3">
            <div className="frame-311-3">
              <Link to="/alarmas-compartidas">
                <div className="link oxygen-bold-white-18px">{cancelar}</div>
              </Link>
              <div className="crear-15 oxygen-bold-white-24px">{crear2}</div>
              <Link to="/alarmas-compartidas">
                <div className="link oxygen-bold-white-18px">{guardar}</div>
              </Link>
            </div>
            <Frame313 className={frame313Props.className} />
            <Frame331
              className={frame331Props.className}
              frame86Props={frame331Props.frame86Props}
              frame3201Props={frame331Props.frame3201Props}
              frame3202Props={frame331Props.frame3202Props}
              frame3231Props={frame331Props.frame3231Props}
              frame3232Props={frame331Props.frame3232Props}
              frame3203Props={frame331Props.frame3203Props}
            />
            <div className="nombre-de-la-alarma-3 oxygen-bold-white-18px-2">{nombreDeLaAlarma}</div>
            <div className="group-68681-3">
              <div className="frame-242-3">
                <Link to="/crear-alarmas-compartidas-correo">
                  <div className="frame-23">
                    <div className="overlap-group-35">
                      <div className="ellipse-5-20"></div>
                      <img className="icon-mail-3" src="/img/vuesax-bold-sms.svg" alt="icon-mail" />
                    </div>
                  </div>
                </Link>
                <div className="correo-4 oxygen-bold-white-14px">{correo}</div>
              </div>
              <div className="frame-241-3">
                <Link to="/crear-alarmas-compartidas-contactos">
                  <div className="frame-23">
                    <div className="overlap-group-36">
                      <div className="ellipse-5-21"></div>
                      <img className="contactos-6" src="/img/contactos.svg" alt="Contactos" />
                    </div>
                  </div>
                </Link>
                <div className="contactos-7 oxygen-bold-white-14px">{contactos2}</div>
              </div>
            </div>
            <Frame317 className={frame317Props.className} frame86Props={frame317Props.frame86Props} />
            <Frame318 className={frame318Props.className} frame67Props={frame318Props.frame67Props} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearAlarmasCompartidas;

import React from "react";
import { Link } from "react-router-dom";
import Frame67 from "../Frame67";
import Frame336 from "../Frame336";
import Group68677 from "../Group68677";
import Frame43 from "../Frame43";
import "./HUB2.css";

function HUB2(props) {
  const {
    am1,
    ejercicios1,
    lunMarMieDom,
    text9,
    x12H28M,
    alarmasActivas,
    horaYFecha,
    alarmasCompartidas,
    crear1,
    consultarCalendario,
    crear2,
    overlapGroup,
    rectangle3772,
    am2,
    disearFlujoUx,
    jueves,
    text12,
    unsplashSyhuhse5Ut8,
    name,
    alarmasSugeridas,
    rectangle29,
    rectangle32,
    rectangle31,
    ejercicios2,
    dailySprint,
    ejercicios3,
    desconectar,
    pantallaDeAlarma,
    frame336Props,
    frame43Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hub screen">
        <div className="overlap-group9-1">
          <div className="rectangle-3782-3"></div>
          <img className="logo-4" src="/img/logo-1.svg" alt="logo" />
          <div className="group-68686-3">
            <img className="icon-clock-3" src="/img/fi-sr-alarm-clock-3.svg" alt="icon-clock" />
            <Link to="/calendario">
              <img className="icon-1" src="/img/vuesax-bold-calendar-2.svg" alt="icon-calendar" />
            </Link>
            <Link to="/alarmas-compartidas">
              <img className="icon-1" src="/img/vuesax-bold-profile-2user-2.svg" alt="icon-user" />
            </Link>
            <img className="icon-star-3" src="/img/vuesax-bold-star-1.svg" alt="icon-star" />
          </div>
        </div>
        <div className="overlap-group8-2">
          <div className="overlap-group1-9">
            <div className="rectangle-217-3"></div>
            <div className="group-10">
              <div className="overlap-group-18">
                <div className="rectangle-1611-3"></div>
                <div className="ellipse-5-13"></div>
                <img className="ellipse-4-7" src="/img/ellipse-4-3.svg" alt="Ellipse 4" />
                <img className="vector-4-7" src="/img/vector-4-4.svg" alt="Vector 4" />
                <img className="vector-5-7" src="/img/vector-5-4.svg" alt="Vector 5" />
                <div className="am-18 valign-text-middle oxygen-bold-white-16px">{am1}</div>
                <div className="ejercicios-3 valign-text-middle oxygen-normal-white-10px">{ejercicios1}</div>
                <div className="lun-mar-mie-dom-1 valign-text-middle oxygen-normal-white-12px">{lunMarMieDom}</div>
                <div className="text-9 valign-text-middle oxygen-bold-white-40px">{text9}</div>
                <div className="x12h-28m-5 valign-text-middle oxygen-normal-white-12px">{x12H28M}</div>
                <Frame67 />
              </div>
            </div>
          </div>
          <Frame336 className={frame336Props.className} />
          <div className="alarmas-activas-1 oxygen-bold-white-24px">{alarmasActivas}</div>
          <div className="hora-y-fecha-2 oxygen-bold-white-24px">{horaYFecha}</div>
          <div className="alarmas-compartidas-3 oxygen-bold-white-24px">{alarmasCompartidas}</div>
          <div className="crear-7 oxygen-bold-white-18px">{crear1}</div>
          <div className="consultar-calendario-1 oxygen-bold-white-18px">{consultarCalendario}</div>
          <div className="crear-8 oxygen-bold-white-18px">{crear2}</div>
          <div className="overlap-group3-4">
            <div className="hora-y-fecha-3">
              <div className="overlap-group-19" style={{ backgroundImage: `url(${overlapGroup})` }}>
                <img className="rectangle-3780-1" src="/img/rectangle-3780-1.svg" alt="Rectangle 3780" />
              </div>
              <img className="rectangle-3772-3" src={rectangle3772} alt="Rectangle 3772" />
            </div>
            <Group68677 />
          </div>
          <div className="overlap-group4-3">
            <div className="rectangle-217-3"></div>
            <div className="group-11">
              <div className="overlap-group-20">
                <div className="rectangle-1611-3"></div>
                <div className="ellipse-5-13"></div>
                <img className="ellipse-4-7" src="/img/ellipse-4-5.svg" alt="Ellipse 4" />
                <img className="vector-4-7" src="/img/vector-4-6.svg" alt="Vector 4" />
                <img className="vector-5-7" src="/img/vector-5-6.svg" alt="Vector 5" />
                <div className="am-19 valign-text-middle oxygen-bold-white-16px">{am2}</div>
                <div className="disear-flujo-ux-3 valign-text-middle oxygen-normal-white-10px">{disearFlujoUx}</div>
                <div className="jueves-3 valign-text-middle oxygen-normal-white-12px">{jueves}</div>
                <div className="text-12 valign-text-middle oxygen-bold-white-40px">{text12}</div>
                <Frame67 />
              </div>
              <div className="frame-27-3">
                <img className="unsplashs-yh-uhse5u-t8-1" src={unsplashSyhuhse5Ut8} alt="unsplash:sYhUhse5uT8" />
                <div className="frame-26-1">
                  <div className="name-12 oxygen-bold-white-18px-2">{name}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="alarmas-sugeridas-1 oxygen-bold-white-24px">{alarmasSugeridas}</div>
          <Frame43 className={frame43Props.className} />
          <div className="overlap-group5-3">
            <img className="rectangle-4" src={rectangle29} alt="Rectangle 29" />
            <div className="rectangle-2-2"></div>
          </div>
          <div className="overlap-group6-2">
            <img className="rectangle-4" src={rectangle32} alt="Rectangle 32" />
            <div className="rectangle-2-2"></div>
          </div>
          <div className="overlap-group7-4">
            <div className="rectangle-30-1"></div>
            <img className="rectangle-4" src={rectangle31} alt="Rectangle 31" />
            <div className="rectangle-2-2"></div>
          </div>
          <div className="ejercicios-4 roboto-normal-white-12px">{ejercicios2}</div>
          <div className="daily-sprint-1 roboto-normal-white-12px">{dailySprint}</div>
          <div className="ejercicios-5 roboto-normal-white-12px">{ejercicios3}</div>
          <div className="desconectar-1 roboto-normal-white-12px">{desconectar}</div>
          <div className="rectangle-3785-2"></div>
          <img className="pantalla-de-alarma" src={pantallaDeAlarma} alt="Pantalla de Alarma" />
        </div>
      </div>
    </div>
  );
}

export default HUB2;

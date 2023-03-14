import React from "react";
import { Link } from "react-router-dom";
import Vuesaxboldcalendar from "../Vuesaxboldcalendar";
import Vuesaxboldprofile2user from "../Vuesaxboldprofile2user";
import Frame67 from "../Frame67";
import Frame336 from "../Frame336";
import Group68677 from "../Group68677";
import Frame43 from "../Frame43";
import "./HUB.css";

function HUB(props) {
  const {
    alarmasActivas,
    crear1,
    horaYFecha,
    consultarCalendario,
    am1,
    ejercicios1,
    lunMarMieDom,
    text5,
    x12H28M,
    overlapGroup,
    rectangle3772,
    alarmasCompartidas,
    crear2,
    alarmasSugeridas,
    verMs,
    am2,
    disearFlujoUx,
    jueves,
    text8,
    unsplashSyhuhse5Ut8,
    name,
    ejercicios2,
    dailySprint,
    ejercicios3,
    desconectar,
    rectangle29,
    rectangle32,
    rectangle31,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hub-2 screen">
        <div className="overlap-group8-1">
          <div className="rectangle-3782-2"></div>
          <img className="logo-3" src="/img/logo-1.svg" alt="logo" />
          <div className="group-68686-2">
            <img className="icon-clock-2" src="/img/fi-sr-alarm-clock.svg" alt="icon-clock" />
            <Vuesaxboldcalendar />
            <Vuesaxboldprofile2user />
            <Link to="/alarmas-sugeridas">
              <img className="icon-star-2" src="/img/vuesax-bold-star-1.svg" alt="icon-star" />
            </Link>
          </div>
        </div>
        <div className="flex-col-14">
          <div className="flex-col-15">
            <div className="flex-row-12">
              <div className="alarmas-activas oxygen-bold-white-24px">{alarmasActivas}</div>
              <Link to="/alarmas-2">
                <div className="crear-5 oxygen-bold-white-18px">{crear1}</div>
              </Link>
              <div className="hora-y-fecha oxygen-bold-white-24px">{horaYFecha}</div>
              <Link to="/calendario">
                <div className="consultar-calendario oxygen-bold-white-18px">{consultarCalendario}</div>
              </Link>
            </div>
            <div className="flex-row-13">
              <div className="flex-col-16">
                <div className="overlap-group1-8">
                  <div className="rectangle-217-2"></div>
                  <div className="group-4">
                    <div className="overlap-group-11">
                      <div className="rectangle-1611-2"></div>
                      <div className="ellipse-5-8"></div>
                      <img className="ellipse-4-2" src="/img/ellipse-4-6.svg" alt="Ellipse 4" />
                      <img className="vector-4-2" src="/img/vector-4-2.svg" alt="Vector 4" />
                      <img className="vector-5-2" src="/img/vector-5-2.svg" alt="Vector 5" />
                      <div className="am-10 valign-text-middle oxygen-bold-white-16px">{am1}</div>
                      <div className="ejercicios valign-text-middle oxygen-normal-white-10px">{ejercicios1}</div>
                      <div className="lun-mar-mie-dom valign-text-middle oxygen-normal-white-12px">{lunMarMieDom}</div>
                      <div className="text-5 valign-text-middle oxygen-bold-white-40px">{text5}</div>
                      <div className="x12h-28m valign-text-middle oxygen-normal-white-12px">{x12H28M}</div>
                      <Frame67 />
                    </div>
                  </div>
                </div>
                <Frame336 />
              </div>
              <div className="overlap-group3-3">
                <div className="hora-y-fecha-1">
                  <div className="overlap-group-12" style={{ backgroundImage: `url(${overlapGroup})` }}>
                    <img className="rectangle-3780" src="/img/rectangle-3780.svg" alt="Rectangle 3780" />
                  </div>
                  <img className="rectangle-3772-2" src={rectangle3772} alt="Rectangle 3772" />
                </div>
                <Group68677 />
              </div>
            </div>
            <div className="flex-row-14">
              <div className="alarmas-compartidas-2 oxygen-bold-white-24px">{alarmasCompartidas}</div>
              <Link to="/alarmas-compartidas">
                <div className="crear-6 oxygen-bold-white-18px">{crear2}</div>
              </Link>
              <div className="alarmas-sugeridas oxygen-bold-white-24px">{alarmasSugeridas}</div>
              <Link to="/alarmas-sugeridas">
                <div className="ver-ms oxygen-bold-white-18px">{verMs}</div>
              </Link>
            </div>
          </div>
          <div className="flex-row-15">
            <div className="overlap-group4-2">
              <div className="rectangle-217-2"></div>
              <div className="group-5">
                <div className="overlap-group-13">
                  <div className="rectangle-1611-2"></div>
                  <div className="ellipse-5-8"></div>
                  <img className="ellipse-4-2" src="/img/ellipse-4-8.svg" alt="Ellipse 4" />
                  <img className="vector-4-2" src="/img/vector-4-4.svg" alt="Vector 4" />
                  <img className="vector-5-2" src="/img/vector-5-4.svg" alt="Vector 5" />
                  <div className="am-11 valign-text-middle oxygen-bold-white-16px">{am2}</div>
                  <div className="disear-flujo-ux-2 valign-text-middle oxygen-normal-white-10px">{disearFlujoUx}</div>
                  <div className="jueves-2 valign-text-middle oxygen-normal-white-12px">{jueves}</div>
                  <div className="text-8 valign-text-middle oxygen-bold-white-40px">{text8}</div>
                  <Frame67 />
                </div>
                <div className="frame-27-2">
                  <img className="unsplashs-yh-uhse5u-t8" src={unsplashSyhuhse5Ut8} alt="unsplash:sYhUhse5uT8" />
                  <div className="frame-26">
                    <div className="name-11 oxygen-bold-white-18px-2">{name}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col-17">
              <div className="flex-row-16 roboto-normal-white-12px">
                <div className="ejercicios-1">{ejercicios2}</div>
                <div className="daily-sprint">{dailySprint}</div>
                <div className="ejercicios-2">{ejercicios3}</div>
                <div className="desconectar">{desconectar}</div>
              </div>
              <div className="flex-row-17">
                <Frame43 />
                <div className="overlap-group-10">
                  <img className="rectangle-3" src={rectangle29} alt="Rectangle 29" />
                  <div className="rectangle-2-1"></div>
                </div>
                <div className="overlap-group-10">
                  <img className="rectangle-3" src={rectangle32} alt="Rectangle 32" />
                  <div className="rectangle-2-1"></div>
                </div>
                <div className="overlap-group7-3">
                  <div className="rectangle-30"></div>
                  <img className="rectangle-3" src={rectangle31} alt="Rectangle 31" />
                  <div className="rectangle-2-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HUB;

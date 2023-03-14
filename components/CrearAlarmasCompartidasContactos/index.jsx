import React from "react";
import { Link } from "react-router-dom";
import Frame67 from "../Frame67";
import Buttons from "../Buttons";
import Frame311 from "../Frame311";
import Frame313 from "../Frame313";
import Frame317 from "../Frame317";
import Frame318 from "../Frame318";
import Frame331 from "../Frame331";
import Group68681 from "../Group68681";
import Component1 from "../Component1";
import Frame289 from "../Frame289";
import Buttons2 from "../Buttons2";
import "./CrearAlarmasCompartidasContactos.css";

function CrearAlarmasCompartidasContactos(props) {
  const {
    alarmasCompartidas,
    crear,
    am,
    disearFlujoUx,
    jueves,
    text1,
    unsplashSyhuhse5Ut8,
    name1,
    sun11,
    rectangle3772,
    conectaConTusPers,
    exploraLaCapacidad,
    nombreDeLaAlarma,
    unsplashXbrkclr_Wfu,
    name2,
    unsplashVvvj5Juzadg,
    name3,
    unsplashYmo_Yc_N_2O,
    ragnarMagnolio,
    unsplashLd9Fqtzl_Pc,
    name4,
    enviado,
    unsplashP0B7Ueozz8E,
    roronoaZoro,
    unsplashZkumzkIkyk,
    name5,
    frame317Props,
    frame318Props,
    frame331Props,
    group68681Props,
    component1Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="crear-alarmas-compartidas-contactos-2 screen">
        <div className="overlap-group7">
          <div className="rectangle-3782"></div>
          <img className="logo" src="/img/logo-1.svg" alt="logo" />
          <div className="group-68686">
            <img className="icon-clock" src="/img/fi-sr-alarm-clock-10.svg" alt="icon-clock" />
            <Link to="/calendario">
              <img className="icon-calendar" src="/img/vuesax-bold-calendar.svg" alt="icon-calendar" />
            </Link>
            <Link to="/alarmas-compartidas">
              <img
                className="vuesaxboldprofile-2user"
                src="/img/vuesax-bold-profile-2user-10.svg"
                alt="vuesax/bold/profile-2user"
              />
            </Link>
            <img className="icon-star" src="/img/vuesax-bold-star.svg" alt="icon-star" />
          </div>
        </div>
        <div className="overlap-group6">
          <div className="alarmas-compartidas oxygen-bold-white-24px">{alarmasCompartidas}</div>
          <div className="crear oxygen-bold-white-18px">{crear}</div>
          <div className="overlap-group1">
            <div className="rectangle-217"></div>
            <div className="group">
              <div className="overlap-group">
                <div className="rectangle-1611"></div>
                <div className="ellipse-5"></div>
                <img className="ellipse-4" src="/img/ellipse-4.svg" alt="Ellipse 4" />
                <img className="vector-4" src="/img/vector-4.svg" alt="Vector 4" />
                <img className="vector-5" src="/img/vector-5.svg" alt="Vector 5" />
                <div className="am valign-text-middle oxygen-bold-white-16px">{am}</div>
                <div className="disear-flujo-ux valign-text-middle oxygen-normal-white-10px">{disearFlujoUx}</div>
                <div className="jueves valign-text-middle oxygen-normal-white-12px">{jueves}</div>
                <h1 className="text-1 valign-text-middle oxygen-bold-white-40px">{text1}</h1>
                <Frame67 />
              </div>
              <div className="frame-27">
                <img className="unsplash" src={unsplashSyhuhse5Ut8} alt="unsplash:sYhUhse5uT8" />
                <div className="frame-2">
                  <div className="name oxygen-bold-white-18px-2">{name1}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mask-group">
            <img className="sun1-1" src={sun11} alt="sun1 1" />
            <img className="rectangle-3772" src={rectangle3772} alt="Rectangle 3772" />
          </div>
          <p className="conecta-con-tus-pers oxygen-bold-white-24px">{conectaConTusPers}</p>
          <p className="explora-la-capacidad oxygen-normal-white-16px">{exploraLaCapacidad}</p>
          <Buttons />
          <div className="rectangle-3785"></div>
          <div className="frame-368">
            <Frame311 />
            <div className="overlap-group5">
              <Frame313 />
              <Frame317 frame86Props={frame317Props.frame86Props} />
              <div className="nombre-de-la-alarma oxygen-bold-white-18px-2">{nombreDeLaAlarma}</div>
              <Frame318 frame67Props={frame318Props.frame67Props} />
              <Frame331
                frame86Props={frame331Props.frame86Props}
                frame3201Props={frame331Props.frame3201Props}
                frame3202Props={frame331Props.frame3202Props}
                frame3231Props={frame331Props.frame3231Props}
                frame3232Props={frame331Props.frame3232Props}
                frame3203Props={frame331Props.frame3203Props}
              />
              <Group68681 frame242Props={group68681Props.frame242Props} />
              <div className="frame-367">
                <div className="flex-row">
                  <div className="flex-col">
                    <Component1>{component1Props.children}</Component1>
                    <div className="frame-299">
                      <img className="unsplash" src={unsplashXbrkclr_Wfu} alt="unsplash:xbrkcLR_WFU" />
                      <div className="frame-2">
                        <div className="name-1 oxygen-bold-white-16px">{name2}</div>
                        <Frame289 />
                      </div>
                    </div>
                    <div className="frame">
                      <img className="unsplash" src={unsplashVvvj5Juzadg} alt="unsplash:VVVJ5JuzADg" />
                      <div className="frame-2">
                        <div className="name-2 oxygen-bold-white-16px">{name3}</div>
                        <Frame289 />
                      </div>
                    </div>
                    <div className="frame">
                      <img className="unsplash" src={unsplashYmo_Yc_N_2O} alt="unsplash:ymo_yC_N_2o" />
                      <div className="frame-2">
                        <div className="ragnar-magnolio oxygen-bold-white-16px">{ragnarMagnolio}</div>
                        <Frame289 />
                      </div>
                    </div>
                    <div className="flex-row-1">
                      <img className="unsplash-ld9f-qt-zl_pc" src={unsplashLd9Fqtzl_Pc} alt="unsplash:Ld9fQtZl_pc" />
                      <div className="frame-294">
                        <div className="name-3 oxygen-bold-white-16px">{name4}</div>
                        <div className="frame-287">
                          <div className="enviado">{enviado}</div>
                          <img className="vector" src="/img/vector.svg" alt="Vector" />
                        </div>
                      </div>
                    </div>
                    <div className="frame">
                      <img className="unsplash" src={unsplashP0B7Ueozz8E} alt="unsplash:p0B7ueoZz8E" />
                      <div className="frame-2">
                        <div className="roronoa-zoro oxygen-bold-white-16px">{roronoaZoro}</div>
                        <Frame289 />
                      </div>
                    </div>
                    <div className="frame">
                      <img className="unsplash" src={unsplashZkumzkIkyk} alt="unsplash:zkUMZK-IKYk" />
                      <div className="frame-2">
                        <div className="name-4 oxygen-bold-white-16px">{name5}</div>
                        <Frame289 />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group4">
                    <div className="rectangle-3787"></div>
                  </div>
                </div>
                <Buttons2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearAlarmasCompartidasContactos;

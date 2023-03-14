import React from "react";
import { Link } from "react-router-dom";
import Frame43 from "../Frame43";
import "./AlarmasSugeridas.css";

function AlarmasSugeridas(props) {
  const {
    title,
    crear,
    ejercicios1,
    dailySprint,
    estudiar,
    rectangle29,
    rectangle3784,
    ejercicios2,
    desconectar,
    horaDeDormir,
    rectangle32,
    rectangle31,
    rectangle3787,
    loremIpsum,
    lorem,
    ipsum,
    rectangle3789,
    rectangle3793,
    rectangle3794,
    rectangle3772,
    sun11,
    alarmasSugeridas,
    sonAlarmasPreConf,
    crearAlarmaSugerida,
    frame43Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="alarmas-sugeridas-2 screen">
        <div className="overlap-group4-5">
          <div className="rectangle-3782-6"></div>
          <img className="logo-7" src="/img/logo-1.svg" alt="logo" />
          <div className="group-68686-6">
            <Link to="/hub-2">
              <img className="icon-clock-6" src="/img/fi-sr-alarm-clock-3.svg" alt="icon-clock" />
            </Link>
            <Link to="/calendario">
              <img className="icon-calendar-3" src="/img/vuesax-bold-calendar-2.svg" alt="icon-calendar" />
            </Link>
            <Link to="/alarmas-compartidas">
              <img className="icon-user-1" src="/img/vuesax-bold-profile-2user.svg" alt="icon-user" />
            </Link>
            <img className="icon-star-6" src="/img/vuesax-bold-star-3.svg" alt="icon-star" />
          </div>
        </div>
        <div className="flex-col-22 roboto-normal-white-12px">
          <div className="flex-row-20">
            <h1 className="title-2 oxygen-bold-white-24px">{title}</h1>
            <div className="crear-10 oxygen-bold-white-18px">{crear}</div>
          </div>
          <div className="flex-row-21">
            <div className="ejercicios-6">{ejercicios1}</div>
            <div className="daily-sprint-2">{dailySprint}</div>
            <div className="estudiar">{estudiar}</div>
          </div>
          <div className="flex-row-22">
            <Frame43 className={frame43Props.className} />
            <div className="overlap-group-24">
              <img className="rectangle-5" src={rectangle29} alt="Rectangle 29" />
              <div className="rectangle-6"></div>
            </div>
            <div className="overlap-group-25">
              <img className="rectangle-5" src={rectangle3784} alt="Rectangle 3784" />
              <div className="rectangle-6"></div>
            </div>
          </div>
          <div className="flex-row-23">
            <div className="ejercicios-6">{ejercicios2}</div>
            <div className="desconectar-2">{desconectar}</div>
            <div className="hora-de-dormir">{horaDeDormir}</div>
          </div>
          <div className="overlap-group-container">
            <div className="overlap-group-26">
              <img className="rectangle-5" src={rectangle32} alt="Rectangle 32" />
              <div className="rectangle-6"></div>
            </div>
            <div className="overlap-group-24">
              <div className="rectangle-3-1"></div>
              <img className="rectangle-5" src={rectangle31} alt="Rectangle 31" />
              <div className="rectangle-6"></div>
            </div>
            <div className="overlap-group-25">
              <div className="rectangle-3-1"></div>
              <img className="rectangle-5" src={rectangle3787} alt="Rectangle 3787" />
              <div className="rectangle-6"></div>
            </div>
          </div>
          <div className="flex-row-24 roboto-normal-white-12px">
            <div className="lorem-ipsum">{loremIpsum}</div>
            <div className="lorem">{lorem}</div>
            <div className="ipsum">{ipsum}</div>
          </div>
          <div className="overlap-group-container">
            <div className="overlap-group-26">
              <img className="rectangle-5" src={rectangle3789} alt="Rectangle 3789" />
              <div className="rectangle-6"></div>
            </div>
            <div className="overlap-group-24">
              <div className="rectangle-3-1"></div>
              <img className="rectangle-5" src={rectangle3793} alt="Rectangle 3793" />
              <div className="rectangle-6"></div>
            </div>
            <div className="overlap-group-25">
              <div className="rectangle-3-1"></div>
              <img className="rectangle-5" src={rectangle3794} alt="Rectangle 3794" />
              <div className="rectangle-6"></div>
            </div>
          </div>
        </div>
        <div className="flex-col-23">
          <div className="mask-group-3">
            <img className="rectangle-3772-5" src={rectangle3772} alt="Rectangle 3772" />
            <img className="sun1-1-3" src={sun11} alt="sun1 1" />
          </div>
          <div className="alarmas-sugeridas-3 oxygen-bold-white-24px">{alarmasSugeridas}</div>
          <p className="son-alarmas-pre-conf oxygen-normal-white-16px">{sonAlarmasPreConf}</p>
          <div className="buttons-7">
            <div className="crear-alarma-sugerida oxygen-bold-white-16px">{crearAlarmaSugerida}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlarmasSugeridas;

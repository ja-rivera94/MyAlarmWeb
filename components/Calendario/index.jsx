import React from "react";
import { Link } from "react-router-dom";
import Group6 from "../Group6";
import "./Calendario.css";

function Calendario(props) {
  const {
    title,
    number1,
    mon,
    x32,
    number2,
    number3,
    tue,
    x33,
    number4,
    number5,
    wed,
    x34,
    number6,
    number7,
    thu1,
    thu2,
    thu3,
    x35,
    number8,
    number9,
    fri,
    number10,
    number11,
    number12,
    sat,
    number13,
    number14,
    number15,
    place,
    number16,
    number17,
    number18,
    number19,
    number20,
    number21,
    number22,
    number23,
    number24,
    number25,
    number26,
    number27,
    number28,
    number29,
    number30,
    number31,
    monTueThruFri1,
    x12H28M1,
    designNewUxFlowForMichael1,
    startFromScreen171,
    x10001,
    vector51,
    monTueThruFri2,
    x12H28M2,
    designNewUxFlowForMichael2,
    startFromScreen172,
    x10002,
    vector52,
    monTueThruFri3,
    x12H28M3,
    x10003,
    x10004,
    designNewUxFlowForMichael3,
    startFromScreen173,
    vector53,
    crearAlarmaCompartida,
    group61Props,
    group62Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="calendario screen">
        <div className="overlap-group6-3">
          <div className="rectangle-3782-4"></div>
          <img className="logo-5" src="/img/logo-1.svg" alt="logo" />
          <Link to="/alarmas-sugeridas">
            <div className="group-68686-4">
              <img className="icon-clock-4" src="/img/fi-sr-alarm-clock-4.svg" alt="icon-clock" />
              <Link to="/calendario">
                <img
                  className="vuesaxboldcalendar-1"
                  src="/img/vuesax-bold-calendar-6.svg"
                  alt="vuesax/bold/calendar"
                />
              </Link>
              <Link to="/alarmas-compartidas">
                <img className="icon-user" src="/img/vuesax-bold-profile-2user.svg" alt="icon-user" />
              </Link>
              <img className="icon-star-4" src="/img/vuesax-bold-star-1.svg" alt="icon-star" />
            </div>
          </Link>
        </div>
        <div className="flex-col-18">
          <h1 className="title-1 oxygen-bold-white-24px">{title}</h1>
          <div className="group-68689">
            <div className="overlap-group2-7">
              <div className="number-44">{number1}</div>
            </div>
            <div className="mon roboto-medium-bali-hai-13px">{mon}</div>
            <div className="x32 roboto-medium-bali-hai-15px">{x32}</div>
            <div className="number-45 roboto-medium-ebony-clay-15px">{number2}</div>
            <div className="number-46 roboto-medium-ebony-clay-15px">{number3}</div>
            <div className="tue roboto-medium-bali-hai-13px">{tue}</div>
            <div className="x33 roboto-medium-bali-hai-15px">{x33}</div>
            <div className="number-47 roboto-medium-ebony-clay-15px">{number4}</div>
            <div className="number-48 roboto-medium-ebony-clay-15px">{number5}</div>
            <div className="wed roboto-medium-bali-hai-13px">{wed}</div>
            <div className="x34 roboto-medium-ebony-clay-15px">{x34}</div>
            <div className="number-49 roboto-medium-ebony-clay-15px">{number6}</div>
            <div className="number-50 roboto-medium-ebony-clay-15px">{number7}</div>
            <div className="thu roboto-medium-bali-hai-13px">{thu1}</div>
            <div className="group-9-1">
              <div className="thu-1">{thu2}</div>
              <div className="thu-2">{thu3}</div>
            </div>
            <div className="x35">{x35}</div>
            <div className="number-51 roboto-medium-ebony-clay-15px">{number8}</div>
            <div className="number-52 roboto-medium-ebony-clay-15px">{number9}</div>
            <div className="fri roboto-medium-bali-hai-13px">{fri}</div>
            <div className="number-53 roboto-medium-ebony-clay-15px">{number10}</div>
            <div className="number-54 roboto-medium-ebony-clay-15px">{number11}</div>
            <div className="number-55 roboto-medium-ebony-clay-15px">{number12}</div>
            <div className="sat roboto-medium-bali-hai-13px">{sat}</div>
            <div className="number-56 roboto-medium-ebony-clay-15px">{number13}</div>
            <div className="number-57 roboto-medium-ebony-clay-15px">{number14}</div>
            <div className="number-58 roboto-medium-ebony-clay-15px">{number15}</div>
            <div className="place-4 roboto-medium-bali-hai-13px">{place}</div>
            <div className="number-59 roboto-medium-ebony-clay-15px">{number16}</div>
            <div className="number-60 roboto-medium-ebony-clay-15px">{number17}</div>
            <div className="number-61 roboto-medium-ebony-clay-15px">{number18}</div>
            <div className="number-62 roboto-medium-ebony-clay-15px">{number19}</div>
            <div className="number-63 roboto-medium-ebony-clay-15px">{number20}</div>
            <div className="number-64 roboto-medium-ebony-clay-15px">{number21}</div>
            <div className="number-65 roboto-medium-ebony-clay-15px">{number22}</div>
            <div className="number-66 roboto-medium-ebony-clay-15px">{number23}</div>
            <div className="number-67 roboto-medium-ebony-clay-15px">{number24}</div>
            <div className="number-68 roboto-medium-ebony-clay-15px">{number25}</div>
            <div className="number-69 roboto-medium-ebony-clay-15px">{number26}</div>
            <div className="number-70 roboto-medium-ebony-clay-15px">{number27}</div>
            <div className="number-71 roboto-medium-ebony-clay-15px">{number28}</div>
            <div className="number-72 roboto-medium-ebony-clay-15px">{number29}</div>
            <div className="number-73 roboto-medium-bali-hai-15px">{number30}</div>
            <div className="number-74 roboto-medium-bali-hai-15px">{number31}</div>
            <div className="oval"></div>
            <div className="oval-copy"></div>
            <div className="oval-copy-3"></div>
            <div className="overlap-group-22">
              <div className="active-1"></div>
              <img
                className="arrow-down-sign-to-navigate"
                src="/img/arrow-down-sign-to-navigate.svg"
                alt="arrow-down-sign-to-navigate"
              />
              <img className="active" src="/img/active.svg" alt="Active" />
              <img
                className="arrow-down-sign-to-navigate"
                src="/img/arrow-down-sign-to-navigate-2.svg"
                alt="arrow-down-sign-to-navigate"
              />
            </div>
            <div className="overlap-group1-10">
              <div className="active-2"></div>
              <img
                className="arrow-down-sign-to-navigate-1"
                src="/img/arrow-down-sign-to-navigate-1.svg"
                alt="arrow-down-sign-to-navigate"
              />
              <img className="active" src="/img/active-1.svg" alt="Active" />
              <img
                className="arrow-down-sign-to-navigate-1"
                src="/img/arrow-down-sign-to-navigate-3.svg"
                alt="arrow-down-sign-to-navigate"
              />
            </div>
            <div className="oval-1"></div>
            <div className="oval-2"></div>
            <div className="oval-copy-1"></div>
            <div className="oval-copy-4"></div>
            <div className="oval-3"></div>
            <div className="oval-copy-2"></div>
            <div className="oval-copy-5"></div>
            <div className="oval-4"></div>
            <div className="oval-copy-6"></div>
            <div className="oval-5"></div>
            <div className="oval-copy-7"></div>
            <div className="oval-6"></div>
            <div className="oval-copy-8"></div>
            <div className="oval-7"></div>
            <div className="oval-copy-8-1"></div>
            <div className="oval-8"></div>
            <div className="oval-copy-9"></div>
            <div className="oval-copy-9-1"></div>
            <div className="oval-9"></div>
            <div className="oval-copy-10"></div>
            <div className="oval-10"></div>
            <div className="oval-copy-11"></div>
            <div className="oval-copy-10-1"></div>
            <div className="oval-copy-2-1"></div>
          </div>
        </div>
        <div className="flex-col-19">
          <div className="overlap-group3-5">
            <div className="rectangle-218"></div>
            <div className="group-13">
              <div className="overlap-group-21">
                <div className="rectangle-1611-4"></div>
                <div className="ellipse-5-14"></div>
                <img className="ellipse-4-8" src="/img/ellipse-4-15.svg" alt="Ellipse 4" />
                <img className="vector-4-8" src="/img/vector-4-9.svg" alt="Vector 4" />
                <div className="mon-tue-thru-fri valign-text-middle oxygen-normal-white-12px">{monTueThruFri1}</div>
                <div className="x12h-28m-6 valign-text-middle oxygen-normal-white-12px">{x12H28M1}</div>
                <Group6 x1000={group61Props.x1000} />
                <p className="design-new-ux-flow-for-michael roboto-semi-bold-white-16px">
                  {designNewUxFlowForMichael1}
                </p>
                <p className="start-from-screen-17 roboto-light-concrete-8px">{startFromScreen171}</p>
                <div className="x1000 roboto-normal-concrete-12px">{x10001}</div>
              </div>
              <img className="vector-5-8" src={vector51} alt="Vector 5" />
            </div>
          </div>
          <div className="overlap-group4-4">
            <div className="rectangle-218"></div>
            <div className="group-12">
              <div className="overlap-group-21">
                <div className="rectangle-1611-4"></div>
                <div className="ellipse-5-14"></div>
                <img className="ellipse-4-8" src="/img/ellipse-4-16.svg" alt="Ellipse 4" />
                <img className="vector-4-8" src="/img/vector-4-10.svg" alt="Vector 4" />
                <div className="mon-tue-thru-fri valign-text-middle oxygen-normal-white-12px">{monTueThruFri2}</div>
                <div className="x12h-28m-6 valign-text-middle oxygen-normal-white-12px">{x12H28M2}</div>
                <Group6 x1000={group62Props.x1000} />
                <div className="design-new-ux-flow-for-michael roboto-semi-bold-white-16px">
                  {designNewUxFlowForMichael2}
                </div>
                <p className="start-from-screen-17 roboto-light-concrete-8px">{startFromScreen172}</p>
                <div className="x1000-1 roboto-normal-concrete-12px">{x10002}</div>
              </div>
              <img className="vector-5-9" src={vector52} alt="Vector 5" />
            </div>
          </div>
          <div className="overlap-group5-4">
            <div className="rectangle-218"></div>
            <div className="group-12">
              <div className="overlap-group-21">
                <div className="rectangle-1611-4"></div>
                <div className="ellipse-5-14"></div>
                <img className="ellipse-4-8" src="/img/ellipse-4-17.svg" alt="Ellipse 4" />
                <img className="vector-4-8" src="/img/vector-4-11.svg" alt="Vector 4" />
                <div className="mon-tue-thru-fri valign-text-middle oxygen-normal-white-12px">{monTueThruFri3}</div>
                <div className="x12h-28m-6 valign-text-middle oxygen-normal-white-12px">{x12H28M3}</div>
                <div className="group-6-1 roboto-normal-concrete-12px">
                  <img className="oval-copy-2-2" src="/img/oval-copy-2-2.svg" alt="Oval Copy 2" />
                  <div className="x1000-2">{x10003}</div>
                  <div className="x1000-3">{x10004}</div>
                </div>
                <div className="design-new-ux-flow-for-michael roboto-semi-bold-white-16px">
                  {designNewUxFlowForMichael3}
                </div>
                <div className="start-from-screen-17 roboto-light-concrete-8px">{startFromScreen173}</div>
              </div>
              <img className="vector-5-10" src={vector53} alt="Vector 5" />
            </div>
          </div>
          <Link to="/crear-alarmas-compartidas">
            <div className="buttons-6">
              <div className="crear-alarma-compartida-5 oxygen-bold-white-16px">{crearAlarmaCompartida}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Calendario;

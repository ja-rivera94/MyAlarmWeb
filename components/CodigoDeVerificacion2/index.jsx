import React from "react";
import { Link } from "react-router-dom";
import ImageSidebar from "../ImageSidebar";
import Group68675 from "../Group68675";
import "./CodigoDeVerificacion2.css";

function CodigoDeVerificacion2(props) {
  const {
    icon,
    cdigoDeVerificacin,
    siguiente,
    text25,
    number1,
    number2,
    number3,
    number4,
    hemosEnviadoUnCod,
    spanText1,
    spanText2,
    imageSidebarProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="codigo-de-verificacion screen">
        <ImageSidebar pantallaDeCarga={imageSidebarProps.pantallaDeCarga} />
        <div className="flex-col-30">
          <img className="icon-8" src={icon} alt="Icon" />
          <div className="overlap-group-39">
            <div className="login-7">
              <h1 className="cdigo-de-verificacin-1 inter-semi-bold-white-38px">{cdigoDeVerificacin}</h1>
              <Link to="/login">
                <div className="buttons-14">
                  <div className="siguiente-4 oxygen-bold-white-16px">{siguiente}</div>
                </div>
              </Link>
            </div>
            <div className="text-25 roboto-semi-bold-white-24px">{text25}</div>
            <div className="number-79 roboto-semi-bold-white-38px">{number1}</div>
            <div className="number-80 roboto-semi-bold-white-38px">{number2}</div>
            <div className="number-81 roboto-semi-bold-white-38px">{number3}</div>
            <div className="number-82 roboto-semi-bold-white-38px">{number4}</div>
            <Group68675 />
            <p className="hemos-enviado-un-cod-1 inter-normal-white-16px">{hemosEnviadoUnCod}</p>
          </div>
          <p className="no-has-recibido-el-cdigo-reenviar-1 poppins-normal-white-16px-2">
            <span className="poppins-normal-white-16px">{spanText1}</span>
            <span className="poppins-bold-blue-violet-16px">{spanText2}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CodigoDeVerificacion2;

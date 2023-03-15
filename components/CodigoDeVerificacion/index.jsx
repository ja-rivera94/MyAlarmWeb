import React from "react";
import { Link } from "react-router-dom";
import ImageSidebar from "../ImageSidebar";
import Group68675 from "../Group68675";
import "./CodigoDeVerificacion.css";


function onClick() {

 window.location.reload();
  
  
}
function CodigoDeVerificacion(props) {
  const {
    icon,
    cdigoDeVerificacin,
    siguiente,
    text23,
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
      <div className="codigo-de-verificacion-2 screen">
        <div className="flex-col-28">
          <img className="icon-6" src={icon} alt="Icon" />
          <div className="overlap-group-37">
            <div className="login-5">
              <h1 className="cdigo-de-verificacin inter-semi-bold-white-38px">{cdigoDeVerificacin}</h1>
              <Link to="/nueva-contrasena">
                <div className="buttons-12">
                  <div className="siguiente-2 oxygen-bold-white-16px">{siguiente}</div>
                </div>
              </Link>
            </div>
            <div className="text-23 roboto-semi-bold-white-24px">{text23}</div>
            <div className="number-75 roboto-semi-bold-white-38px"><input type="text" name="name" className="input-codigo " /></div>
            <div className="number-76 roboto-semi-bold-white-38px"><input type="text" name="name" className="input-codigo " /></div>
            <div className="number-77 roboto-semi-bold-white-38px"><input type="text" name="name" className="input-codigo " /></div>
            <div className="number-78 roboto-semi-bold-white-38px"><input type="text" name="name" className="input-codigo " /></div>
            <Group68675 />
            <p className="hemos-enviado-un-cod inter-normal-white-16px">{hemosEnviadoUnCod}</p>
          </div>
          <p className="no-has-recibido-el-cdigo-reenviar poppins-normal-white-16px-2">
            <span className="poppins-normal-white-16px">{spanText1}</span>
            <button className="poppins-bold-blue-violet-16px" >{spanText2}</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CodigoDeVerificacion;

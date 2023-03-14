import React from "react";
import { Link } from "react-router-dom";
import ImageSidebar from "../ImageSidebar";
import Input2 from "../Input2";
import "./Registro.css";

function Registro(props) {
  const {
    icon,
    title,
    contrasea,
    confirmarContrasea,
    siguiente,
    johnDoeGmailCom1,
    johnDoeGmailCom2,
    text24,
    imageSidebarProps,
    input2Props,
  } = props;
  return (
    <div className="container-center-horizontal">
      <div className="registro screen">
        <ImageSidebar pantallaDeCarga={imageSidebarProps.pantallaDeCarga} />
        <div className="flex-col-29">
          <img className="icon-7" src={icon} alt="Icon" />
          <div className="overlap-group-38 inter-normal-white-16px">
            <div className="login-6">
              <h1 className="title-3 inter-semi-bold-white-38px">{title}</h1>
              <div className="confirmar-contrasea-1 inter-semi-bold-white-16px"> Correo <input type="text" name="name" className="email" /></div>
              <div className="confirmar-contrasea-1 inter-semi-bold-white-16px"> Contraseña <input type="password" name="name" className="email" /></div>
              <div className="confirmar-contrasea-1 inter-semi-bold-white-16px"> Confirmar Contraseña <input type="password" name="name" className="email" /></div>
              <Link to="/codigo-de-verificacion-2" className="align-self-flex-center">
                <div className="buttons-13">
                  <div className="siguiente-3 oxygen-bold-white-16px">{siguiente}</div>
                </div>
              </Link>
            </div>
            <div className="johndoegmailcom-3">{johnDoeGmailCom1}</div>
            <div className="johndoegmailcom-4">{johnDoeGmailCom2}</div>
            <div className="text-24">{text24}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;

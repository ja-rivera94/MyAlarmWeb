import React from "react";
import { Link } from "react-router-dom";
import ImageSidebar from "../ImageSidebar";
import Input22 from "../Input22";
import "./RecuperacionDeContrasea1.css";

function RecuperacionDeContrasea1(props) {
  const { icon, recuperacinDeContrasea, siguiente, imageSidebarProps, input22Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="recuperacion-de-contrasena-1 screen">
        <ImageSidebar pantallaDeCarga={imageSidebarProps.pantallaDeCarga} />
        <div className="flex-col-26">
          <img className="icon-4" src={icon} alt="Icon" />
          <div className="login-3">
            <h1 className="recuperacin-de-contrasea inter-semi-bold-white-38px">{recuperacinDeContrasea}</h1>
            <Input22
              email={input22Props.email}
              johnDoeGmailCom={input22Props.johnDoeGmailCom}
              className={input22Props.className}
            />
            <Link to="/codigo-de-verificacion-2">
              <div className="buttons-10">
                <div className="siguiente oxygen-bold-white-16px">{siguiente}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecuperacionDeContrasea1;

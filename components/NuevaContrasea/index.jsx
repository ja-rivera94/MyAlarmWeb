import React from "react";
import { Link } from "react-router-dom";
import ImageSidebar from "../ImageSidebar";
import Input2 from "../Input2";
import "./NuevaContrasea.css";

function NuevaContrasea(props) {
  const {
    icon,
    nuevaContrasea,
    confirmarContrasea,
    siguiente,
    johnDoeGmailCom,
    text20,
    imageSidebarProps,
    input2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="nueva-contrasena screen">
        <div className="flex-col-27">
          <img className="icon-5" src={icon} alt="Icon" />
          <div className="overlap-group-33 inter-normal-white-16px">
            <div className="login-4">
              <h1 className="nueva-contrasea inter-semi-bold-white-38px">{nuevaContrasea}</h1>
              <Input2>{input2Props.children}</Input2>
              <div className="confirmar-contrasea inter-semi-bold-white-16px">{confirmarContrasea}</div>
              <div className="input-1"><div className="input-2"><input type="password" name="name" className="email" /></div></div>
              <Link to="/login">
                <div className="buttons-11">
                  <div className="siguiente-1 oxygen-bold-white-16px">{siguiente}</div>
                </div>
              </Link>
            </div>
            <div className="johndoegmailcom-1">{johnDoeGmailCom}</div>
            <div className="text-20">{text20}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuevaContrasea;

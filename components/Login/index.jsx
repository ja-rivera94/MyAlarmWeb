import React from "react";
import { Link } from "react-router-dom";
import ImageSidebar from "../ImageSidebar";
import Input22 from "../Input22";
import "./Login.css";


function Login(props) {
  const {
    icon,
    title,
    ingresaLosDatosCo,
    confirmar,
    olvidasteTuContrasea,
    ingresaConGoogle1,
    ingresaConGoogle2,
    ingresaConFacebook1,
    ingresaConFacebook2,
    o,
    recurdame,
    spanText1,
    spanText2,
    imageSidebarProps,
    input221Props,
    input222Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="login screen">
        <div className="login-1">
          <div className="flex-col-12">
            <img className="icon" src={icon} alt="Icon" />
            <div className="overlap-group2-2">
              <div className="login-2">
                <h1 className="title roboto-semi-bold-white-38px">{title}</h1>
                <p className="ingresa-los-datos-co">{ingresaLosDatosCo}</p>
                <Input22 email={input221Props.email} />
                <Input22
                  email={input222Props.email}
                  johnDoeGmailCom={input222Props.johnDoeGmailCom}
                  className={input222Props.className}
                />
                <Link to="/hub-2">
                  <div className="buttons-5">
                    <div className="confirmar oxygen-bold-white-16px">{confirmar}</div>
                  </div>
                </Link>
                <Link to="/recuperacion-de-contrasena-1" className="align-self-flex-end">
                  <div className="olvidaste-tu-contrasea inter-normal-white-16px">{olvidasteTuContrasea}</div>
                </Link>
              </div>
              <Link to="/registro">
                <div className="login-with-google">
                  <div className="overlap-group-8">
                    <div className="login-with-google-1">
                      <img className="search-1-1" src="/img/search-1-1.svg" alt="search 1" />
                      <div className="ingresa-con-google-1 poppins-normal-white-16px">{ingresaConGoogle2}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/registro">
                <div className="login-with-facebook">
                  <div className="overlap-group1-6">
                    <div className="group-2-1">
                      <img className="vector-23" src="/img/vector-20.svg" alt="Vector" />
                      <div className="ingresa-con-facebook poppins-normal-thunder-16px">{ingresaConFacebook1}</div>
                    </div>
                    <div className="login-with-facebook-1">
                      <img className="icon-facebook" src="/img/vector-21.svg" alt="icon-facebook" />
                      <div className="ingresa-con-facebook-1 poppins-normal-white-16px">{ingresaConFacebook2}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="or">
                <img className="line-1" src="/img/line-1.svg" alt="Line 1" />
                <div className="o poppins-normal-white-16px">{o}</div>
                <img className="line-2" src="/img/line-2.svg" alt="Line 2" />
              </div>
              <div className="remember-me">
                <div className="recurdame poppins-normal-white-16px">
                <input type="checkbox" id="topping" name="topping" value="Paneer" />Recuerdame
                </div>
              </div>
            </div>
            <Link to="/registro">
              <p className="no-tienes-una-cuenta-registrate poppins-normal-white-16px-2">
                <span className="poppins-normal-white-16px">{spanText1}</span>
                <span className="poppins-bold-blue-violet-16px">nuevo</span>
              </p>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

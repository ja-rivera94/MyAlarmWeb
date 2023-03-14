import "./App.css";
import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import CrearAlarmasCompartidasContactos from "./components/CrearAlarmasCompartidasContactos";
import Web from "./components/Web";
import Login from "./components/Login";
import CrearAlarmasCompartidasContactos2 from "./components/CrearAlarmasCompartidasContactos2";
import HUB from "./components/HUB";
import HUB2 from "./components/HUB2";
import Calendario from "./components/Calendario";
import AlarmasCompartidas from "./components/AlarmasCompartidas";
import AlarmasSugeridas from "./components/AlarmasSugeridas";
import Alarmas from "./components/Alarmas";
import CrearAlarmasCompartidasCorreo from "./components/CrearAlarmasCompartidasCorreo";
import Alarmas2 from "./components/Alarmas2";
import RecuperacionDeContrasea1 from "./components/RecuperacionDeContrasea1";
import NuevaContrasea from "./components/NuevaContrasea";
import CrearAlarmasCompartidas from "./components/CrearAlarmasCompartidas";
import CodigoDeVerificacion from "./components/CodigoDeVerificacion";
import Registro from "./components/Registro";
import CodigoDeVerificacion2 from "./components/CodigoDeVerificacion2";
import Frame42 from "./components/Frame42";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/crear-alarmas-compartidas-contactos-2" element= {<CrearAlarmasCompartidasContactos {...crearAlarmasCompartidasContactosData} />}>
          
        </Route>
        <Route path="/" element= {<Login {...loginData} />}>
        </Route>
        <Route path="/login" element = {<Login {...loginData} />}>
        </Route>
        <Route path="/crear-alarmas-compartidas-contactos" element = {<CrearAlarmasCompartidasContactos2 {...crearAlarmasCompartidasContactos2Data} />}>
        </Route>
        <Route path="/hub-2" element = {<HUB {...hUBData} />}>
        </Route>
        <Route path="/hub" element = {<HUB2 {...hUB2Data} />}>
        </Route>
        <Route path="/calendario" element = {<Calendario {...calendarioData} />}>
        </Route>
        <Route path="/alarmas-compartidas" element = {<AlarmasCompartidas {...alarmasCompartidasData} />}>
        </Route>
        <Route path="/alarmas-sugeridas" element = {<AlarmasSugeridas {...alarmasSugeridasData} />}>
        </Route>
        <Route path="/alarmas-2" element = {<Alarmas {...alarmasData} />}>
        </Route>
        <Route path="/crear-alarmas-compartidas-correo" element = {<CrearAlarmasCompartidasCorreo {...crearAlarmasCompartidasCorreoData} />}>
        </Route>
        <Route path="/alarmas" element = {<Alarmas2 {...alarmas2Data} />}>
        </Route>
        <Route path="/recuperacion-de-contrasena-1" element = {<RecuperacionDeContrasea1
            icon="/img/icon@2x.png"
            recuperacinDeContrasea="Recuperación de contraseña"
            siguiente="Siguiente"
            imageSidebarProps={recuperacionDeContrasea1Data.imageSidebarProps}
            input22Props={recuperacionDeContrasea1Data.input22Props}
          />}>
        </Route>
        <Route path="/nueva-contrasena" element = {<NuevaContrasea {...nuevaContraseaData} />}>
        </Route>
        <Route path="/crear-alarmas-compartidas" element = {<CrearAlarmasCompartidas {...crearAlarmasCompartidasData} />}>
        </Route>
        <Route path="/codigo-de-verificacion-2" element = {<CodigoDeVerificacion {...codigoDeVerificacionData} />}>
        </Route>
        <Route path="/registro" element = {<Registro {...registroData} />}>
        </Route>
        <Route path="/codigo-de-verificacion" element = {<CodigoDeVerificacion2 {...codigoDeVerificacion2Data} />}>
        </Route>
        <Route path="/frame-42" element = {<Frame42 />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const frame861Data = {
    children: "Sonido",
};

const frame3171Data = {
    frame86Props: frame861Data,
};

const frame672Data = {
    className: "frame-67-3",
};

const frame3181Data = {
    frame67Props: frame672Data,
};

const frame862Data = {
    children: "Repetir",
};

const frame3201Data = {
    children: "Lun",
};

const frame3202Data = {
    children: "Mie",
    className: "frame-32-4-2",
};

const frame3231Data = {
    children: "Jue",
};

const frame3232Data = {
    children: "Vie",
    className: "frame-324",
};

const frame3203Data = {
    children: "Sab",
    className: "frame-32-4",
};

const frame3311Data = {
    frame86Props: frame862Data,
    frame3201Props: frame3201Data,
    frame3202Props: frame3202Data,
    frame3231Props: frame3231Data,
    frame3232Props: frame3232Data,
    frame3203Props: frame3203Data,
};

const frame2421Data = {
    className: "",
};

const group686811Data = {
    frame242Props: frame2421Data,
};

const component1Data = {
    children: "Contactos",
};

const crearAlarmasCompartidasContactosData = {
    alarmasCompartidas: "Alarmas Compartidas",
    crear: "Crear",
    am: "AM",
    disearFlujoUx: "Diseñar Flujo UX",
    jueves: "Jueves",
    text1: "10:00",
    unsplashSyhuhse5Ut8: "/img/unsplash-syhuhse5ut8@2x.png",
    name1: "Alejandro",
    sun11: "/img/sun1-1.png",
    rectangle3772: "/img/rectangle-3772@2x.png",
    conectaConTusPers: "Conecta con tus personas mas cercanas o tus colegas de trabajo a traves de alarmas compartidas",
    exploraLaCapacidad: "Explora la capacidad de mantenerse siempre sincronizados",
    nombreDeLaAlarma: "Nombre de la alarma",
    unsplashXbrkclr_Wfu: "/img/unsplash-xbrkclr-wfu@2x.png",
    name2: "Maria Acevedo",
    unsplashVvvj5Juzadg: "/img/unsplash-vvvj5juzadg@2x.png",
    name3: "Victoria Pillai",
    unsplashYmo_Yc_N_2O: "/img/unsplash-ymo-yc-n-2o@2x.png",
    ragnarMagnolio: "Ragnar Magnolio",
    unsplashLd9Fqtzl_Pc: "/img/unsplash-ld9fqtzl-pc@2x.png",
    name4: "Alejandro Duarte",
    enviado: "Enviado",
    unsplashP0B7Ueozz8E: "/img/unsplash-p0b7ueozz8e@2x.png",
    roronoaZoro: "Roronoa Zoro",
    unsplashZkumzkIkyk: "/img/unsplash-zkumzk-ikyk@2x.png",
    name5: "Elisa Jaramillo",
    frame317Props: frame3171Data,
    frame318Props: frame3181Data,
    frame331Props: frame3311Data,
    group68681Props: group686811Data,
    component1Props: component1Data,
};

const imageSidebar1Data = {
    pantallaDeCarga: "/img/pantalla-de-carga-2.png",
};

const input221Data = {
    email: "Correo",
    johnDoeGmailCom: "juanjose@gmail.com",
};

const input222Data = {
    email: "Password",
    johnDoeGmailCom: "",
    className: "input-password",
};

const loginData = {
    icon: "/img/icon@2x.png",
    title: "Bienvenido/a",
    ingresaLosDatosCo: "Ingresa los datos con los que te registraste para iniciar sesión",
    confirmar: "Confirmar",
    olvidasteTuContrasea: "Olvidaste tu contraseña",
    ingresaConGoogle1: "Ingresa con Google",
    ingresaConGoogle2: "Ingresa con Google",
    ingresaConFacebook1: "Ingresa con Facebook",
    ingresaConFacebook2: "Ingresa con Facebook",
    o: "O",
    recurdame: "Recuérdame",
    spanText1: "No tienes una cuenta? ",
    spanText2: "Registrate",
    imageSidebarProps: imageSidebar1Data,
    input221Props: input221Data,
    input222Props: input222Data,
};

const frame863Data = {
    children: "Sonido",
};

const frame3172Data = {
    frame86Props: frame863Data,
};

const frame864Data = {
    children: "Repetir",
};

const frame3204Data = {
    children: "Lun",
};

const frame3205Data = {
    children: "Mie",
    className: "frame-32-5-2",
};

const frame3233Data = {
    children: "Jue",
};

const frame3234Data = {
    children: "Vie",
    className: "frame-324-1",
};

const frame3206Data = {
    children: "Sab",
    className: "frame-32-5",
};

const frame3312Data = {
    frame86Props: frame864Data,
    frame3201Props: frame3204Data,
    frame3202Props: frame3205Data,
    frame3231Props: frame3233Data,
    frame3232Props: frame3234Data,
    frame3203Props: frame3206Data,
};

const frame2422Data = {
    className: "frame-242-1",
};

const group686812Data = {
    className: "group-68681-1",
    frame242Props: frame2422Data,
};

const frame674Data = {
    className: "frame-67-5",
};

const frame3182Data = {
    className: "frame-318-1",
    frame67Props: frame674Data,
};

const crearAlarmasCompartidasContactos2Data = {
    alarmasCompartidas: "Alarmas Compartidas",
    crear: "Crear",
    am: "AM",
    disearFlujoUx: "Diseñar Flujo UX",
    jueves: "Jueves",
    text3: "10:00",
    unsplashSyhuhse5Ut8: "/img/unsplash-syhuhse5ut8@2x.png",
    name1: "Alejandro",
    sun11: "/img/sun1-1.png",
    rectangle3772: "/img/rectangle-3772@2x.png",
    conectaConTusPers: "Conecta con tus personas mas cercanas o tus colegas de trabajo a traves de alarmas compartidas",
    exploraLaCapacidad: "Explora la capacidad de mantenerse siempre sincronizados",
    nombreDeLaAlarma: "Nombre de la alarma",
    unsplashXbrkclr_Wfu: "/img/unsplash-xbrkclr-wfu@2x.png",
    name2: "Maria Acevedo",
    unsplashVvvj5Juzadg: "/img/unsplash-vvvj5juzadg@2x.png",
    name3: "Victoria Pillai",
    unsplashYmo_Yc_N_2O: "/img/unsplash-ymo-yc-n-2o@2x.png",
    ragnarMagnolio: "Ragnar Magnolio",
    unsplashLd9Fqtzl_Pc: "/img/unsplash-ld9fqtzl-pc@2x.png",
    name4: "Alejandro Duarte",
    enviar: "Enviar",
    unsplashP0B7Ueozz8E: "/img/unsplash-p0b7ueozz8e@2x.png",
    roronoaZoro: "Roronoa Zoro",
    unsplashZkumzkIkyk: "/img/unsplash-zkumzk-ikyk@2x.png",
    name5: "Elisa Jaramillo",
    unsplashRtxzljp20Ho: "/img/rectangle-3772@2x.png",
    marolineJonas: "Maroline Jonas",
    shareStats1: "Share Stats",
    frame284: "/img/rectangle-3772@2x.png",
    unsplashIwe2Gh9N8Ou: "/img/rectangle-3772@2x.png",
    name6: "Andre Adam",
    shareStats2: "Share Stats",
    frame2832: "/img/rectangle-3772@2x.png",
    frame317Props: frame3172Data,
    frame331Props: frame3312Data,
    group68681Props: group686812Data,
    frame318Props: frame3182Data,
};

const hUBData = {
    alarmasActivas: "Alarmas Activas",
    crear1: "Crear",
    horaYFecha: "Hora y Fecha",
    consultarCalendario: "Consultar Calendario",
    am1: "AM",
    ejercicios1: "Ejercicios",
    lunMarMieDom: "Lun, Mar, Mie, Dom",
    text5: "5:30",
    x12H28M: "12h 28m",
    overlapGroup: "/img/sun1-1-2.png",
    rectangle3772: "/img/rectangle-3772-2.png",
    alarmasCompartidas: "Alarmas Compartidas",
    crear2: "Crear",
    alarmasSugeridas: "Alarmas Sugeridas",
    verMs: "Ver más",
    am2: "AM",
    disearFlujoUx: "Diseñar Flujo UX",
    jueves: "Jueves",
    text8: "10:00",
    unsplashSyhuhse5Ut8: "/img/unsplash-syhuhse5ut8@2x.png",
    name: "Alejandro",
    ejercicios2: "Ejercicios",
    dailySprint: "Daily Sprint",
    ejercicios3: "Ejercicios",
    desconectar: "Desconectar",
    rectangle29: "/img/rectangle-29@2x.png",
    rectangle32: "/img/rectangle-32@2x.png",
    rectangle31: "/img/rectangle-31@2x.png",
};

const frame3362Data = {
    className: "frame-336-1",
};

const frame432Data = {
    className: "frame-43-1",
};

const hUB2Data = {
    am1: "AM",
    ejercicios1: "Ejercicios",
    lunMarMieDom: "Lun, Mar, Mie, Dom",
    text9: "5:30",
    x12H28M: "12h 28m",
    alarmasActivas: "Alarmas Activas",
    horaYFecha: "Hora y Fecha",
    alarmasCompartidas: "Alarmas Compartidas",
    crear1: "Crear",
    consultarCalendario: "Consultar Calendario",
    crear2: "Crear",
    overlapGroup: "/img/sun1-1-1.png",
    rectangle3772: "/img/rectangle-3772-2.png",
    am2: "AM",
    disearFlujoUx: "Diseñar Flujo UX",
    jueves: "Jueves",
    text12: "10:00",
    unsplashSyhuhse5Ut8: "/img/unsplash-syhuhse5ut8@2x.png",
    name: "Alejandro",
    alarmasSugeridas: "Alarmas Sugeridas",
    rectangle29: "/img/rectangle-29@2x.png",
    rectangle32: "/img/rectangle-32@2x.png",
    rectangle31: "/img/rectangle-31@2x.png",
    ejercicios2: "Ejercicios",
    dailySprint: "Daily Sprint",
    ejercicios3: "Ejercicios",
    desconectar: "Desconectar",
    pantallaDeAlarma: "/img/pantalla-de-alarma.png",
    frame336Props: frame3362Data,
    frame43Props: frame432Data,
};

const group61Data = {
    x1000: "10:00-13:00",
};

const group62Data = {
    x1000: "14:00-15:00",
};

const calendarioData = {
    title: "Calendario",
    number1: "5",
    mon: "Mon",
    x32: "31",
    number2: "6",
    number3: "13",
    tue: "Tue",
    x33: "30",
    number4: "7",
    number5: "14",
    wed: "Wed",
    x34: "1",
    number6: "8",
    number7: "15",
    thu1: "Thu",
    thu2: "Marzo",
    thu3: "2023",
    x35: "2",
    number8: "9",
    number9: "16",
    fri: "Fri",
    number10: "3",
    number11: "10",
    number12: "17",
    sat: "Sat",
    number13: "4",
    number14: "11",
    number15: "18",
    place: "Sun",
    number16: "12",
    number17: "19",
    number18: "20",
    number19: "21",
    number20: "22",
    number21: "23",
    number22: "24",
    number23: "25",
    number24: "26",
    number25: "27",
    number26: "28",
    number27: "29",
    number28: "30",
    number29: "31",
    number30: "1",
    number31: "2",
    monTueThruFri1: "Mon, Tue, Thru, Fri",
    x12H28M1: "12h 28m",
    designNewUxFlowForMichael1: "Diseñar flujo UX con Alejandro",
    startFromScreen171: "Empieza en la página 19",
    x10001: "x",
    vector51: "/img/rectangle-3772@2x.png",
    monTueThruFri2: "Mon, Tue, Thru, Fri",
    x12H28M2: "12h 28m",
    designNewUxFlowForMichael2: "Salir a Caminar",
    startFromScreen172: "El objetivo son 2 kilometros",
    x10002: "x",
    vector52: "/img/rectangle-3772@2x.png",
    monTueThruFri3: "Mon, Tue, Thru, Fri",
    x12H28M3: "12h 28m",
    x10003: "18:00-20:30",
    x10004: "x",
    designNewUxFlowForMichael3: "Cena con Anya",
    startFromScreen173: "Flow romanticón",
    vector53: "/img/rectangle-3772@2x.png",
    crearAlarmaCompartida: "Crear Alarma Compartida",
    group61Props: group61Data,
    group62Props: group62Data,
};

const buttons4Data = {
    className: "buttons-2",
};

const alarmasCompartidasData = {
    alarmasCompartidas: "Alarmas Compartidas",
    crear: "Crear",
    am: "AM",
    disearFlujoUx: "Diseñar Flujo UX",
    jueves: "Jueves",
    text13: "10:00",
    unsplashSyhuhse5Ut8: "/img/unsplash-syhuhse5ut8@2x.png",
    name: "Alejandro",
    sun11: "/img/sun1-1.png",
    rectangle3772: "/img/rectangle-3772@2x.png",
    conectaConTusPers: "Conecta con tus personas mas cercanas o tus colegas de trabajo a traves de alarmas compartidas",
    exploraLaCapacidad: "Explora la capacidad de mantenerse siempre sincronizados",
    buttonsProps: buttons4Data,
};

const frame433Data = {
    className: "frame-43-2",
};

const alarmasSugeridasData = {
    title: "Alarmas Sugeridas",
    crear: "Crear",
    ejercicios1: "Ejercicios",
    dailySprint: "Daily Sprint",
    estudiar: "Estudiar",
    rectangle29: "/img/rectangle-29@2x.png",
    rectangle3784: "/img/rectangle-29@2x.png",
    ejercicios2: "Ejercicios",
    desconectar: "Desconectar",
    horaDeDormir: "Hora de Dormir",
    rectangle32: "/img/rectangle-32@2x.png",
    rectangle31: "/img/rectangle-31@2x.png",
    rectangle3787: "/img/rectangle-31@2x.png",
    loremIpsum: "Lorem Ipsum",
    lorem: "Lorem",
    ipsum: "Ipsum",
    rectangle3789: "/img/rectangle-32@2x.png",
    rectangle3793: "/img/rectangle-31@2x.png",
    rectangle3794: "/img/rectangle-31@2x.png",
    rectangle3772: "/img/rectangle-3772@2x.png",
    sun11: "/img/sun1-1.png",
    alarmasSugeridas: "Alarmas Sugeridas",
    sonAlarmasPreConf: "Son alarmas pre configuradas que te ayudan a ahorrar tiempo y sacarle más provecho a tu día a día",
    crearAlarmaSugerida: "Crear Alarma Sugerida",
    frame43Props: frame433Data,
};

const frame3363Data = {
    className: "frame-336-2",
};

const alarmasData = {
    alarmasActivas: "Alarmas Activas",
    crear: "Crear",
    am: "AM",
    ejercicios: "Ejercicios",
    lunMarMieDom: "Lun, Mar, Mie, Dom",
    text14: "5:30",
    x12H28M: "12h 28m",
    rectangle3772: "/img/rectangle-3772@2x.png",
    sun11: "/img/sun1-1.png",
    mantenteSiempreEn: "Mantente siempre en orden con nuestras alarmas, que se sincronizan automáticamente con tu smarphone",
    exploraLaCapacidad: "Explora la capacidad de mantenerse siempre sincronizados",
    nuevaAlarma: "Nueva Alarma",
    frame336Props: frame3363Data,
};

const frame865Data = {
    children: "Repetir",
};

const frame3207Data = {
    children: "Lun",
};

const frame3208Data = {
    children: "Mie",
    className: "frame-32-6-2",
};

const frame3235Data = {
    children: "Jue",
};

const frame3236Data = {
    children: "Vie",
    className: "frame-324-2",
};

const frame3209Data = {
    children: "Sab",
    className: "frame-32-6",
};

const frame3313Data = {
    frame86Props: frame865Data,
    frame3201Props: frame3207Data,
    frame3202Props: frame3208Data,
    frame3231Props: frame3235Data,
    frame3232Props: frame3236Data,
    frame3203Props: frame3209Data,
};

const buttons22Data = {
    className: "buttons-4",
};

const frame2423Data = {
    className: "frame-242-2",
};

const group686813Data = {
    className: "group-68681-2",
    frame242Props: frame2423Data,
};

const frame866Data = {
    children: "Sonido",
};

const frame3173Data = {
    className: "frame-317-2",
    frame86Props: frame866Data,
};

const frame6712Data = {
    className: "frame-67-9",
};

const frame3183Data = {
    className: "frame-318-2",
    frame67Props: frame6712Data,
};

const crearAlarmasCompartidasCorreoData = {
    alarmasCompartidas: "Alarmas Compartidas",
    crear: "Crear",
    am: "AM",
    disearFlujoUx: "Diseñar Flujo UX",
    jueves: "Jueves",
    text16: "10:00",
    unsplashSyhuhse5Ut8: "/img/unsplash-syhuhse5ut8@2x.png",
    name: "Alejandro",
    sun11: "/img/sun1-1.png",
    rectangle3772: "/img/rectangle-3772@2x.png",
    conectaConTusPers: "Conecta con tus personas mas cercanas o tus colegas de trabajo a traves de alarmas compartidas",
    exploraLaCapacidad: "Explora la capacidad de mantenerse siempre sincronizados",
    nombreDeLaAlarma: "Nombre de la alarma",
    ingresaUnaDireccinDeCorreo: "Ingresa una dirección de correo",
    correo: "Correo",
    frame331Props: frame3313Data,
    buttons2Props: buttons22Data,
    group68681Props: group686813Data,
    frame317Props: frame3173Data,
    frame318Props: frame3183Data,
};

const frame3364Data = {
    className: "frame-336-3",
};

const alarmas2Data = {
    rectangle3772: "/img/rectangle-3772@2x.png",
    sun11: "/img/sun1-1.png",
    mantenteSiempreEn: "Mantente siempre en orden con nuestras alarmas, que se sincronizan automáticamente con tu smarphone",
    exploraLaCapacidad: "Explora la capacidad de mantenerse siempre sincronizados",
    am: "AM",
    ejercicios: "Ejercicios",
    lunMarMieDom: "Lun, Mar, Mie, Dom",
    text18: "5:30",
    x12H28M: "12h 28m",
    alarmasActivas: "Alarmas Activas",
    crear: "Crear",
    crearAlarma: "/img/crear-alarma.png",
    frame336Props: frame3364Data,
};

const imageSidebar2Data = {
    pantallaDeCarga: "/img/pantalla-de-carga-3.png",
};

const input223Data = {
    email: "Correo",
    johnDoeGmailCom: "juanjose@gmail.com",
    className: "input-email-1",
};

const recuperacionDeContrasea1Data = {
    imageSidebarProps: imageSidebar2Data,
    input22Props: input223Data,
};

const imageSidebar3Data = {
    pantallaDeCarga: "/img/pantalla-de-carga-5.png",
};

const input21Data = {
    children: "Nueva Contraseña",
};

const nuevaContraseaData = {
    icon: "/img/icon@2x.png",
    nuevaContrasea: "Nueva Contraseña",
    confirmarContrasea: "Confirmar Contraseña",
    siguiente: "Siguiente",
    johnDoeGmailCom: "",
    text20: "",
    imageSidebarProps: imageSidebar3Data,
    input2Props: input21Data,
};

const frame3134Data = {
    className: "frame-313-3",
};

const frame867Data = {
    children: "Repetir",
};

const frame32010Data = {
    children: "Lun",
};

const frame32011Data = {
    children: "Mie",
    className: "frame-32-7-2",
};

const frame3237Data = {
    children: "Jue",
};

const frame3238Data = {
    children: "Vie",
    className: "frame-324-3",
};

const frame32012Data = {
    children: "Sab",
    className: "frame-32-7",
};

const frame3314Data = {
    className: "frame-331-3",
    frame86Props: frame867Data,
    frame3201Props: frame32010Data,
    frame3202Props: frame32011Data,
    frame3231Props: frame3237Data,
    frame3232Props: frame3238Data,
    frame3203Props: frame32012Data,
};

const frame868Data = {
    children: "Sonido",
};

const frame3174Data = {
    className: "frame-317-3",
    frame86Props: frame868Data,
};

const frame6715Data = {
    className: "frame-67-12",
};

const frame3184Data = {
    className: "frame-318-3",
    frame67Props: frame6715Data,
};

const crearAlarmasCompartidasData = {
    alarmasCompartidas: "Alarmas Compartidas",
    crear1: "Crear",
    am: "AM",
    disearFlujoUx: "Diseñar Flujo UX",
    jueves: "Jueves",
    text21: "10:00",
    unsplashSyhuhse5Ut8: "/img/unsplash-syhuhse5ut8@2x.png",
    name: "Alejandro",
    sun11: "/img/sun1-1.png",
    rectangle3772: "/img/rectangle-3772@2x.png",
    conectaConTusPers: "Conecta con tus personas mas cercanas o tus colegas de trabajo a traves de alarmas compartidas",
    exploraLaCapacidad: "Explora la capacidad de mantenerse siempre sincronizados",
    cancelar: "Cancelar",
    crear2: "Crear",
    guardar: "Guardar",
    nombreDeLaAlarma: "Nombre de la alarma",
    correo: "Correo",
    contactos2: "Contactos",
    frame313Props: frame3134Data,
    frame331Props: frame3314Data,
    frame317Props: frame3174Data,
    frame318Props: frame3184Data,
};

const imageSidebar4Data = {
    pantallaDeCarga: "/img/pantalla-de-carga-1.png",
};

const codigoDeVerificacionData = {
    icon: "/img/icon@2x.png",
    cdigoDeVerificacin: "Código de verificación",
    siguiente: "Siguiente",
    text23: "1:00",
    number1: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    hemosEnviadoUnCod: "Hemos enviado un codigo de verificación a tu correo",
    spanText1: "No has recibido el código? ",
    spanText2: "Reenviar",
    imageSidebarProps: imageSidebar4Data,
};

const imageSidebar5Data = {
    pantallaDeCarga: "/img/pantalla-de-carga.png",
};

const input23Data = {
    children: "Correo",
    className: "input-email-3",
};

const registroData = {
    icon: "/img/icon@2x.png",
    title: "Registrarse",
    contrasea: "Contraseña",
    confirmarContrasea: "Confirmar Contraseña",
    siguiente: "Siguiente",
    johnDoeGmailCom1: "",
    johnDoeGmailCom2: "",
    text24: "",
    imageSidebarProps: imageSidebar5Data,
    input2Props: input23Data,
};

const imageSidebar6Data = {
    pantallaDeCarga: "/img/pantalla-de-carga-1.png",
};

const codigoDeVerificacion2Data = {
    icon: "/img/icon@2x.png",
    cdigoDeVerificacin: "Código de verificación",
    siguiente: "Siguiente",
    text25: "1:00",
    number1: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    hemosEnviadoUnCod: "Hemos enviado un codigo de verificación a tu correo",
    spanText1: "No has recibido el código? ",
    spanText2: "Reenviar",
    imageSidebarProps: imageSidebar6Data,
};

const webData = {
    overlapGroup: "/img/rectangle-3772-2.png",
    vector10: "/img/rectangle-3772-2.png",
    overlapGroup1: "/img/rectangle-3772-2.png",
    vector11: "/img/rectangle-3772@2x.png",
    rectangle: "/img/rectangle-3772@2x.png",
    vector12: "/img/rectangle-3772@2x.png",
    frame41: "/img/rectangle-3772-2.png",
    frame3: "/img/rectangle-3772-2.png",
    vector13: "/img/rectangle-3772@2x.png",
    vector14: "/img/rectangle-3772-2.png",
    vector15: "/img/rectangle-3772-2.png",
    frame2: "/img/rectangle-3772-2.png",
    vector16: "/img/rectangle-3772-2.png",
    vector18: "/img/rectangle-3772-2.png",
    vector19: "/img/rectangle-3772-2.png",
    logo: "/img/logo.png",
    rectangle1: "/img/rectangle-3772-2.png",
};


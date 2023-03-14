import React from "react";
import "./ImageSidebar.css";

function ImageSidebar(props) {
  const { pantallaDeCarga } = props;

  return (
    <div className="image-sidebar">
      <img className="pantalla-de-carga" src={pantallaDeCarga} alt="Pantalla de carga" />
    </div>
  );
}

export default ImageSidebar;

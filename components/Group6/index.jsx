import React from "react";
import "./Group6.css";

function Group6(props) {
  const { x1000 } = props;

  return (
    <div className="group-6-2">
      <img className="oval-copy-2-3" src="/img/oval-copy-2.svg" alt="Oval Copy 2" />
      <div className="x1000-4 roboto-normal-concrete-12px">{x1000}</div>
    </div>
  );
}

export default Group6;

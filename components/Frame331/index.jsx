import React from "react";
import Frame86 from "../Frame86";
import Frame320 from "../Frame320";
import Frame323 from "../Frame323";
import "./Frame331.css";

function Frame331(props) {
  const {
    className,
    frame86Props,
    frame3201Props,
    frame3202Props,
    frame3231Props,
    frame3232Props,
    frame3203Props,
  } = props;

  return (
    <div className={`frame-331 ${className || ""}`}>
      <div className="frame-319">
        <Frame86>{frame86Props.children}</Frame86>
        <img
          className="fi-sr-angle-small-right-4"
          src="/img/fi-sr-angle-small-right-7.svg"
          alt="fi-sr-angle-small-right"
        />
      </div>
      <div className="frame-327 oxygen-normal-white-16px">
        <Frame320>{frame3201Props.children}</Frame320>
        <div className="frame-32">
          <div className="place">Mar</div>
        </div>
        <Frame320 className={frame3202Props.className}>{frame3202Props.children}</Frame320>
        <Frame323>{frame3231Props.children}</Frame323>
        <Frame323 className={frame3232Props.className}>{frame3232Props.children}</Frame323>
        <Frame320 className={frame3203Props.className}>{frame3203Props.children}</Frame320>
        <div className="frame-32">
          <div className="dom">Dom</div>
        </div>
      </div>
    </div>
  );
}

export default Frame331;

import React from "react";
import "./Frame313.css";

function Frame313(props) {
  const { className } = props;

  return (
    <div className={`frame-313 ${className || ""}`}>
      <div className="flex-col-1">
        <div className="overlap-group2">
          <div className="number oxygen-normal-white-14px">08</div>
          <div className="number oxygen-normal-granite-gray-14px">08</div>
          <div className="number-4 oxygen-normal-granite-gray-14px">28</div>
          <div className="rectangle-212"></div>
        </div>
        <div className="flex-row-2">
          <div className="number-container">
            <div className="number-5 oxygen-normal-white-14px">09</div>
            <div className="number-6 oxygen-normal-granite-gray-14px">09</div>
          </div>
          <div className="number-7 oxygen-normal-granite-gray-14px">29</div>
        </div>
      </div>
      <div className="flex-row-3">
        <div className="number-container-1">
          <div className="number-8 oxygen-bold-white-56px">10</div>
          <div className="number-9 oxygen-normal-granite-gray-14px">11</div>
        </div>
        <div className="text-2 oxygen-bold-white-56px">:</div>
        <div className="number-container-2">
          <div className="number-10 oxygen-bold-white-56px">00</div>
          <div className="number-11 oxygen-normal-granite-gray-14px">31</div>
        </div>
        <div className="flex-col-2">
          <div className="pm oxygen-normal-granite-gray-14px">PM</div>
          <div className="overlap-group1-1 oxygen-bold-white-24px">
            <div className="am-1">AM</div>
            <div className="am-2">AM</div>
          </div>
        </div>
      </div>
      <div className="overlap-group-1 oxygen-normal-granite-gray-14px">
        <div className="number-12">12</div>
        <div className="number-13">32</div>
        <div className="rectangle-211"></div>
      </div>
    </div>
  );
}

export default Frame313;

import React from "react";
import "./Web.css";

function Web(props) {
  const {
    overlapGroup,
    vector10,
    overlapGroup1,
    vector11,
    rectangle,
    vector12,
    frame41,
    frame3,
    vector13,
    vector14,
    vector15,
    frame2,
    vector16,
    vector18,
    vector19,
    logo,
    rectangle1,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="web screen">
        <div className="overlap-group8">
          <div className="overlap-group9">
            <div className="overlap-group7-1">
              <img className="vector-1" src="/img/vector-1.svg" alt="Vector" />
              <div className="group-1">
                <div className="overlap-group5-1">
                  <div className="group-2">
                    <div className="flex-col-9">
                      <div className="vector-container">
                        <img className="vector-2" src="/img/vector-5.svg" alt="Vector" />
                        <img className="vector-3" src="/img/vector-6.svg" alt="Vector" />
                        <img className="vector-6" src="/img/vector-10.svg" alt="Vector" />
                        <img className="vector-7" src="/img/vector-13.svg" alt="Vector" />
                        <img className="vector-8" src="/img/vector-11.svg" alt="Vector" />
                        <img className="vector-9" src="/img/vector-12.svg" alt="Vector" />
                        <img className="vector-10" src="/img/vector-13.svg" alt="Vector" />
                        <img className="vector-11" src="/img/vector-17.svg" alt="Vector" />
                      </div>
                      <div className="rectangle-2"></div>
                    </div>
                    <div className="overlap-group3-2">
                      <div className="overlap-group-7" style={{ backgroundImage: `url(${overlapGroup})` }}>
                        <img className="vector-12" src={vector10} alt="Vector" />
                      </div>
                      <div className="overlap-group1-5" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                        <img className="vector-13" src={vector11} alt="Vector" />
                      </div>
                      <img className="rectangle" src={rectangle} alt="Rectangle" />
                      <img className="vector-14" src={vector12} alt="Vector" />
                      <img className="frame-4" src={frame41} alt="Frame 4" />
                    </div>
                    <div className="flex-row-10">
                      <div className="flex-col-10">
                        <img className="frame-3" src={frame3} alt="Frame 3" />
                        <div className="vector-container-1">
                          <img className="vector-15" src={vector13} alt="Vector" />
                          <img className="vector-16" src={vector14} alt="Vector" />
                          <img className="vector-17" src={vector15} alt="Vector" />
                        </div>
                      </div>
                      <div className="flex-col-11">
                        <img className="frame-2-3" src={frame2} alt="Frame 2" />
                        <img className="vector-18" src={vector16} alt="Vector" />
                      </div>
                    </div>
                  </div>
                  <img className="vector-19" src="/img/vector-7.svg" alt="Vector" />
                </div>
                <div className="vector-container-2">
                  <img className="vector-20" src={vector18} alt="Vector" />
                  <img className="vector-21" src={vector19} alt="Vector" />
                </div>
              </div>
              <img className="logo-1" src={logo} alt="logo" />
            </div>
            <img className="vector-22" src="/img/vector.svg" alt="Vector" />
            <img className="frame-4-1" src="/img/frame-4.svg" alt="Frame 4" />
          </div>
          <img className="rectangle-1" src={rectangle1} alt="Rectangle 1" />
        </div>
      </div>
    </div>
  );
}

export default Web;

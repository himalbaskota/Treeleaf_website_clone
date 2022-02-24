import React from "react";
import brilltech from "../images/clients/brilltech.png";
import djpl from "../images/clients/djpl.jpg";
import evolve from "../images/clients/evolve.png";
import traffic from "../images/clients/nepal-traffic-police.png";
import rpa from "../images/clients/rpa-labs.png";
import xceltrip from "../images/clients/xceltrip.png";

export default function Client() {
  return (
    <div className="bg-light">
      <h3 className="text-center fw-bold mb-5 pb-5">Some of our Clients </h3>
      <div className="ps-5 pe-5 ms-5 me-5 ">
        <div className="row  justify-content-around text-center">
          <div className="col-lg-4 ">
            <img src={brilltech} alt="Logo" height="75px" />
          </div>
          <div className="col-lg-4">
            <img src={djpl} alt="Logo" height="75px" />
          </div>
          <div className="col-lg-4">
            <img src={traffic} alt="Logo" height="75px" />
          </div>
          <div className="col-lg-4 mt-5  pt-5  pb-5">
            <img src={rpa} alt="Logo" height="75px" />
          </div>
          <div className="col-lg-4 mt-5 pt-5 pb-5">
            <img src={xceltrip} alt="Logo" height="75px" />
          </div>
          <div className="col-lg-4 mt-5 pt-5 pb-5">
            <img src={evolve} alt="Logo" height="75px" />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import logo from "../images/homepage.svg";
import bg from "../images/bg.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="row h-100 position-relative">
        <img src={bg} alt="bg" alt="Logo" height="500px" />
        <div className=" position-absolute d-flex justify-content-around">
          <div className="col-lg-4">
            <div className="mt-3">
              <div className="mt-5 pt-5">
                <h5 className="text-white fst-italic ms-5 ps-5 mt-5 pt-5 ">
                  Newton found his idea under a tree, we hope you do it under
                  the treeleaf.
                </h5>
              </div>
              <div className="ms-5 ps-5 pt-3">
                <button className="btn btn-success ">
                  {" "}
                  <Link to="/About" className="nav-link p-0 text-white">
                    Learn more
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import logo from "../images/diff.svg";
import "../../src/App.css";

export default function Different() {
  return (
    <div>
      <h4 className="text-center pt-4 pb-5  fw-bold ">
        {" "}
        What makes us different?{" "}
      </h4>
      <div className="ms-4 me-4">
        <div className="row h-100">
          <div className="col-lg-6 ">
            <img src={logo} alt="Logo" height="350" />
          </div>
          <div className="col-lg-6 pt-4">
            <div className="different">
              <ul>
                <li>
                  We deliver an exemplary service in a timely manner to ensure
                  our clients are truly satisfied.
                </li>
                <li>
                  We have a vastly experienced core team along with an advisory
                  board of CEOs which includes CTOs, CEOs, and professors from
                  different organizations from different parts of the globe to
                  ensure our technical competence in the market.
                </li>
                <li>
                  We are only a call away for any kind of assistance or
                  consultation to ensure our clients don’t find themselves in
                  difficult situations.
                </li>
                <li>
                  We have a work hard-play hard culture in our company giving
                  our team freedom to bring out their creativity and we
                  encourage them to be original thinkers as well.
                </li>
                <li>
                  We pride ourselves on being data driven propelling businesses
                  into intelligence revolution with the latest technology on
                  hand.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

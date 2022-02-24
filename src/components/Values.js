import React from "react";
import Sincerity from "../images/sincerity.svg";
import responsibility from "../images/responsibility.svg";
import determined from "../images/determine.svg";
import party from "../images/party.svg";
import thirty from "../images/determine.svg";
import "../../src/App.css";

import learn from "../images/learning.svg";
export default function Values() {
  return (
    <div className="light-gray">
      <div>
        <h3 className="text-center pt-4 pb-5  fw-bold ">Our Values</h3>
      </div>
      <div className="ms-5 ps-5 me-5 pe-5">
        <div className="ms-5 ps-5 me-5 pe-5">
          <div className="row  justify-content-around text-center">
            <div className="col-lg-3">
              <img src={Sincerity} alt="Logo" height="42px" />
              <h4>Have Sincerity</h4>
              <p className="fs-6">
                You're pleasant - but on the other hand, you're immediate,
                straightforward, and genuine in your viewpoint. Also, you seek
                the same from your companions.
              </p>
            </div>

            <div className="col-lg-3">
              <img src={responsibility} alt="Logo" height="42px" />
              <h4>Continuous learning</h4>
              <p>
                You aspire for continuous learning because you are passionate
                about what you do.
              </p>
            </div>

            <div className="col-lg-3">
              <img src={determined} alt="Logo" height="42px" />
              <h4>Be determined</h4>
              <p>
                {" "}
                You consistently drive yourself higher than ever- be innovative
                and seek to solve a problem in a better way..
              </p>
            </div>

            <div className="col-lg-3">
              <img src={responsibility} alt="Logo" height="42px" />
              <h4>Be responsible</h4>
              <p>
                You are enthusiastic and more responsible for decision making
                and problem-solving.{" "}
              </p>
            </div>
            <div className="col-lg-4">
              <img src={party} alt="Logo" height="42px" />
              <h4>Code hard Party harder</h4>
              <p>
                Working hard is our passion but we don’t forget about fun.
                Besides professional meet-ups, we celebrate birthdays, events
                and achievements.{" "}
              </p>
            </div>

            <div className="col-lg-4">
              <img src={thirty} alt="Logo" height="42px" />
              <h4>30 minutes challenges</h4>
              <p>
                Growth is important aspect for employees. It is necessary to
                broaden the mind beyond the respective field. For this, we
                conduct daily thirty-minutes challenges focusing on intellectual
                growth of employees.
              </p>
            </div>
            <div className="col-lg-4">
              <img src={learn} alt="Logo" height="42px" />
              <h4>Knowledge Sharing</h4>
              <p>
                The more you share your knowledge, the more you learn. We
                conduct knowledge sharing programs every alternate Fridays,
                where our employees share their knowledge and experience in
                their respective fields.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

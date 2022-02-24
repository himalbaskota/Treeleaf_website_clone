import React from "react";
import icon from "../images/aboutpage/abouticon.svg";
import banner from "../images/aboutpage/aboutbanner.jpg";
import Header from "./Header";
import Footer from "./Footer";
import "../../src/App.css";
export default function About() {
  return (
    <>
      <Header />
      <div className="pb-5 mb-5">
        <div className="mask-custom row h-100 position-relative">
          <img src={banner} alt="banner" height="500px" />
          <div className="d-flex justify-content-center align-items-center h-100 position-absolute">
            <h1 className="text-white mb-0">
              Leaders of today for <br /> leaders of tomorrow
            </h1>
          </div>
        </div>
      </div>
      <div className="ps-5 ms-5 ">
        <div className="row h-100 me-5 pe-5">
          <div className="col-lg-6 ">
            <h4 className="pb-4 fw-bold">About Us</h4>
            <p>
              Treeleaf is an innovative tech company that specializes in AI for
              the advancement of the human race. We see a world where technology
              enhances human potential and helps it to set foot into a new era
              of intelligence. With a team focused on driving advancements,
              discovering technological solutions and enacting a path to AI, we
              ensure our clients a market driven exemplary service. We aim to
              provide an honest service with realistic timelines and focus on
              quality instead of quantity.
            </p>
            <p>
              Additionally, we help you discover the true value of data to
              obtain meaningful insights that would help you anticipate future
              outcomes by infusing intelligence into your day to day
              functionality.
            </p>
          </div>
          <div className="col-lg-6 ps-5  ">
            <img src={icon} alt="icon" height="400" width="600" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import React from "react";
import "../../src/App.css";
import compvision from "../images/computervision.jpg";
import ocr from "../images/ocr.jpg";
import chatbot from "../images/chatbot.jpg";
const Services = () => {
  return (
    <>
      <div className="team-grid">
        <div className="container">
          <div className="intro">
            <h3 className="text-center pt-5 fw-bold">Our Services</h3>
          </div>
          <div className="row people d-flex justify-content-around">
            <div className="col-md-4 col-lg-3 item">
              <div className="box  position-relative">
                <img
                  src={compvision}
                  alt="compvision"
                  height="280px"
                  width="280px"
                />
                <h4 className="position-absolute">COMPUTER VISION</h4>

                <div className="cover">
                  <h4> Computer Vision </h4>
                  <p className="title">
                    Treeleaf has built a wide range of customized computer
                    vision solutions which include face detection, face
                    recognition, etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 item">
              <div className="box">
                <img src={ocr} alt="ocr" height="280px" width="280px" />
                <div className="cover">
                  <h4> ocr </h4>
                  <p className="title">
                    Our services include information extraction from documents,
                    invoice and bills, books digitization, etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 item">
              <div className="box">
                <img src={chatbot} alt="chatbot" height="280px" width="280px" />
                <div className="cover">
                  <h4> chatbot </h4>
                  <p className="title">
                    We provide customized end to end solutions which include
                    domain specific chatbot model, knowledge graph for
                    interactive conversation, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

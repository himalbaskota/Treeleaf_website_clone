import React from "react";
import logo from "../images/logo.svg";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ps-5 pe-5 ">
      <div className="container-fluid">
        <Link to="/" className="nav-link active">
          <img src={logo} alt="Logo" height="40" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ps-4 pe-4 fw-bold">
              <Link to="/About" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item ps-4 pe-4 fw-bold">
              <Link to="/Service" className="nav-link active">
                Service
              </Link>
            </li>
            <li className="nav-item dropdown ps-4 pe-4 fw-bold">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item fw-bold" href="#">
                    Internet of Things (IoT)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fw-bold" href="#">
                    Artificial Intelligence (AI)
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider fw-bold" />
                </li>
              </ul>
            </li>
            <li className="nav-item ps-4 pe-4 fw-bold">
              <a className="nav-link">Technologies </a>
            </li>
            <li className="nav-item ps-4 pe-4 fw-bold">
              <a className="nav-link">Careers </a>
            </li>
          </ul>
          <form className="d-flex pe-5 fw-bold">
            <button className="btn btn-success round" type="submit">
              Contact
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

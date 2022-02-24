import React from "react";
import "../App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Content from "./Content";
import Different from "./Different";
import Values from "./Values";
import Services from "./Services";
import Client from "./Client";

const Landing = () => {
  return (
    <>
      <Header />
      <Home />
      <Content />
      <Different />
      <Values />
      <Services />
      <Client />
      <Footer />
    </>
  );
};

export default Landing;

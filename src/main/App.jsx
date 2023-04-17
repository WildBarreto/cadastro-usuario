import Footer from "../components/template/Footer";
import Logo from "../components/template/Logo";
import Main from "../components/template/Main";
import Nav from "../components/template/Nav";
import "./App.css";
import React from "react";

export default (props) => (
  <div className="app">
    <Nav />
    <Logo />
    <Main />
    <Footer />
  </div>
);

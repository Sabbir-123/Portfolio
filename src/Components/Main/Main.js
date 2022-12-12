import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "../HomePage/About/About";
import Contact from "../HomePage/Contact/Contact";
import Projects from "../HomePage/Projects/Projects";
import Skills from "../HomePage/Skills/Skills";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;

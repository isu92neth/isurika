import React, { Component } from "react";
import NavBar from "./NavBar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Container = () => {
  return (
    <div>
      <Home />

      <About />

      <Skills />

      <Projects />

      <Contact />
    </div>
  );
};

export default Container;

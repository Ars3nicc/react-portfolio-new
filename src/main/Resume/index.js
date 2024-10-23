import React, { useRef } from "react";
import "./index.css";
import AboutMe from "./AboutMe/index";
import Tools from "./Tools";
import Skills from "./Skills";
import Experience from "./Experience";

function Resume() {


  return (
    <div className="Resume">
      <div id="">
        <AboutMe />
      </div>
      <div className="py-2">
        <Tools />
      </div>
      <div className="py-5" id="services">
        <Skills />
      </div>
      <hr className="border-4 border-gray-800 my-4" />
      <div className="py-5" id="experiences">
        <Experience />
      </div>
    </div>
  );
}

export default Resume;

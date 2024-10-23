import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutMe from "./AboutMe";
import Tools from "./Tools";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";

function Resume() {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  return (
    <div className="Resume">
      <div id="" data-aos="fade-up">
        <AboutMe />
      </div>
      <div className="py-2" data-aos="fade-up">
        <Tools />
      </div>
      <div className="py-5" id="services" data-aos="fade-up">
        <Skills />
      </div>
      <hr className="border-4 border-gray-800 my-4" />
      <div className="py-5" id="experiences" data-aos="fade-up">
        <Experience />
      </div>
      <hr className="border-4 border-gray-800 my-4" />
      <div className="py-5" id="projects" data-aos="fade-up">
        <Projects />
      </div>
    </div>
  );
}

export default Resume;
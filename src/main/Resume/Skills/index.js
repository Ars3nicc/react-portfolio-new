import React from "react";
import uiuxImage from "../../../assets/img/uiux.svg";
import codeImage from "../../../assets/img/code.svg";
import managementImage from "../../../assets/img/organization_chart.svg";

function Skills() {
  return (
    <div>
      <h1 className="py-8 font-semibold text-2xl md:text-3xl text-center">
        Learn more about my skillsets and services!
      </h1>
      <section className="py-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-white hover:rounded-lg p-4 ease-in-out duration-300 hover:shadow-lg">
          <img src={uiuxImage} alt="UI/UX Design" className="w-20" />
          <h2 className="text-center font-bold py-7 text-3xl group-hover:text-blue-500">
            UI/UX
          </h2>
          <p className="text-center">
            Incorporating creativity with cutting-edge, user-friendly designs
            and experiences
          </p>
        </div>
        <div className="group flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-white hover:rounded-lg p-4 ease-in-out duration-300 hover:shadow-lg">
          <img src={codeImage} alt="Web Application" className="w-20" />
          <h2 className="text-center font-bold py-7 text-3xl group-hover:text-green-700">
            Web Application
          </h2>
          <p className="text-center">
            Bringing ideas to life through the development of web-based
            solutions.
          </p>
        </div>
        <div className="group flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-white hover:rounded-lg p-4 ease-in-out duration-300 hover:shadow-lg">
          <img src={managementImage} alt="Team Player" className="w-20" />
          <h2 className="text-center font-bold py-7 text-3xl group-hover:text-red-600">Team Player</h2>
          <p className="text-center">
            Skilled in leading and collaborating with colleagues to achieve more
            effective outcomes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Skills;

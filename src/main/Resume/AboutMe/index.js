import React from "react";
import "./index.css";

function AboutMe() {
  
  return (
    <div className="flex flex-col">
      <p className="mt-5">franzmanrique2121@gmail.com</p>
      <p className="mt-3">(+63) 916 630 2417</p>
      <div className="mt-3 flex space-x-6">
        <a
          href="https://www.linkedin.com/in/franz-ronin-manrique-4b7612242/"
          className="text-gray-800 hover:text-sky-600 text-4xl"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Ars3nicc"
          className="text-gray-800 hover:text-green-700 text-4xl"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/lafranzz/"
          className="text-gray-800 hover:text-red-400 text-4xl"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://codepen.io/Ars3nicc"
          className="text-gray-800 hover:text-gray-400 text-4xl"
        >
          <i className="fab fa-codepen"></i>
        </a>
      </div>
      {/* <p className="w-96 ">
        I create highly efficient, productivity-boosting applications,
        delivering top-tier solutions and exceptional digital experiences for
        users.
      </p> */}
    </div>
  );
}

export default AboutMe;

import React from "react";
import CV from "../../assets/documents/MANRIQUE_CV.pdf";

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 py-4 text-center flex justify-center gap-16 md:justify-between z-50 ">
      <a
        className=""
        href={CV}
        target="_blank"
        rel="noopener noreferrer"
      >
        My Résumé
      </a>

      <div className="uppercase space-x-3">
        <a href="#" onClick={() => scrollToSection("about-me")}>About Me /</a> 
        <a href="#" onClick={() => scrollToSection("services")}>Services /</a>
        <a href="#" onClick={() => scrollToSection("experiences")}>Experiences /</a>
        <a href="#" onClick={() => scrollToSection("projects")}>Projects</a> 
      </div>
    </div>
  );
}
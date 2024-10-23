import React from "react";

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 py-4 text-center flex justify-center gap-16 md:justify-between z-50">
      <a
        className=""
        href="/documents/MANRIQUE_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Résumé
      </a>

      <div className="uppercase">
        <a href="#" onClick={() => scrollToSection("about-me")}>About Me</a> / &nbsp;&nbsp; 
        <a href="#" onClick={() => scrollToSection("services")}>Services</a> / &nbsp;&nbsp;  
        <a href="#" onClick={() => scrollToSection("experiences")}>Experiences</a> / &nbsp;&nbsp;   
        <a href="#" onClick={() => scrollToSection("projects")}>Projects</a> 
      </div>
    </div>
  );
}
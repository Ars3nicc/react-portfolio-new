import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Tools() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const tools = [
    { name: "PHP", icon: "fab fa-php" },
    { name: "Python", icon: "fab fa-python" },
    { name: "Laravel", icon: "fab fa-laravel" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "CSS", icon: "fab fa-css3-alt" }, // Tailwind doesn't have a specific icon in Font Awesome, using CSS3 as a placeholder
    { name: "Vue.js", icon: "fab fa-vuejs" },
    { name: "TypeScript", icon: "fab fa-js" }, // TypeScript doesn't have a specific icon in Font Awesome, using JS as a placeholder
    { name: "React", icon: "fab fa-react" },
    { name: "Jira", icon: "fab fa-jira" }, // Assuming you have a custom icon for Jira
    { name: "Node.js", icon: "fab fa-node-js" },
  ];

  return (
    <div className="bg-white rounded-full mt-16   ">
      <Slider {...settings}>
        {tools.map((tool, index) => (
          <div key={index} className="p-4 w-full">
            <div className="rounded-lg text-center">
              <i className={`${tool.icon} text-4xl md:text-6xl`}></i>
              <p className="mt-2 hidden md:block">{tool.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Tools;

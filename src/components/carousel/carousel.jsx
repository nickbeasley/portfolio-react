import React, { useState } from "react";
import ProjectCard from "../card/card";
import nextPhoto from "../../images/next-button.png";
import "./carousel.css";

const Carousel = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((activeIndex + 1) % projects.length);
  };

  const prev = () => {
    setActiveIndex(activeIndex === 0 ? projects.length - 1 : activeIndex - 1);
  };

  return (
    <div className="carousel">
      <div className="carousel-button" onClick={prev}>
        <div className="next-button-bg">
          <img src={nextPhoto} alt="Prev" className="prev-img" />
        </div>
      </div>
      <div className="carousel-card">
        <ProjectCard project={projects[activeIndex]} />
      </div>
      <div className="carousel-button" onClick={next}>
        <div className="next-button-bg">
          <img src={nextPhoto} alt="Next" className="next-img" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

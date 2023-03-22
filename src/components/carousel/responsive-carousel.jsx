import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

const ResponsiveCarousel = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const onChange = (index) => {
    setActiveIndex(index);
    setExpanded(false);
  };

  const onClickThumb = (index) => {
    setActiveIndex(index);
  };
  // these two prevent body from scrolling when carousel is swiped
  const onSwipeStart = () => {
    document.body.style.overflow = "hidden";
  };
  const onSwipeEnd = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickThumb={onClickThumb}
      showThumbs={false}
      infiniteLoop={true}
      selectedItem={activeIndex}
      onSwipeStart={onSwipeStart}
      onSwipeEnd={onSwipeEnd}
    >
      {projects.map((project, index) => (
        <div key={index} className="carousel-card">
          <div className="cards">
            <div className="card-image">
              <img
                src={project.image}
                alt="Project SS"
                className="project-img"
              />
            </div>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            {expanded && <p className="project-details">{project.details}</p>}
            <div className="card-buttons">
              <button
                onClick={() => setExpanded(!expanded)}
                className="details-button"
              >
                {expanded ? "Less Details" : "More Details"}
              </button>
              <a
                href={project.codeLink}
                className="code-link"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  className="demo-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ResponsiveCarousel;

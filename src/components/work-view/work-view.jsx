import React from "react";
import projects from "../../projects/projects.js";
// import ResponsiveCarousel from "../carousel/responsive-carousel";
import Carousel from "../carousel/carousel";
import "./work-view.css";

const WorkView = () => {
  return (
    <div className="work-view">
      <div className="container">
        <h1 className="page-title">Go to Projects in the navbar!</h1>
        <Carousel projects={projects} />
      </div>
      {/* <div>
        <h1 className="page-title">Check out my projects!</h1>
        <ResponsiveCarousel projects={projects} />
      </div>
      */}
    </div>
  );
};

export default WorkView;

import React from "react";
import projects from "../../projects/projects.js";
import Carousel from "../carousel/carousel";
import "./work-view.css";

const WorkView = () => {
  return (
    <div className="container">
      <h1 className="page-title">Check out my projects!</h1>
      <Carousel projects={projects} />
    </div>
  );
};

export default WorkView;

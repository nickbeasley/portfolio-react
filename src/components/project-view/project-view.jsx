import React from "react";
import projects from "../../projects/projects.js";
import ResponsiveCarousel from "../carousel/responsive-carousel";
import "./project-view.css";

const ProjectView = () => {
  return (
    <div>
      <ResponsiveCarousel projects={projects} />
    </div>
  );
};

export default ProjectView;

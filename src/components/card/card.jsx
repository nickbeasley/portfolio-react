import React, { useState } from "react";
import "./card.css";
import { Card, Container } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container className="card-container">
      <Card className="cards">
        <Card.Img
          src={project.image}
          alt="Project SS"
          className="project-img"
        />
        <Card.Title className="project-title">{project.title}</Card.Title>
        <Card.Text className="project-description">
          {project.description}
        </Card.Text>
        {expanded && (
          <Card.Text className="project-details">{project.details}</Card.Text>
        )}
        <div className="card-buttons">
          <button
            onClick={() => setExpanded(!expanded)}
            className="details-button"
          >
            {expanded ? "Less Details" : "More Details"}
          </button>
          <Card.Link
            href={project.codeLink}
            className="code-link"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </Card.Link>
          <Card.Link href={project.demoLink} className="demo-link">
            View Live
          </Card.Link>
        </div>
        <div>{project.number}</div>
      </Card>
    </Container>
  );
};

export default ProjectCard;

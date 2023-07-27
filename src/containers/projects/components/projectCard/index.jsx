import React from "react";
import "./style/projectCard.scss";

const ProjectCard = ({image, title, description}) => {
  return (
    <article className="project-card">
      <img src={image} alt={title} className="project-card__cover"/>
      <h4 className="project-card__title">{title}</h4>
      <p className="project-card__description">{description}</p>
    </article>
  );
};

export default ProjectCard;

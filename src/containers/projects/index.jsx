import React from "react";

import ProjectCard from "./components/projectCard";
import LegoBrick from "./images/legoBrick.png";
import Test from "./images/test.png";
import "./style/projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects__title">PROJECTS</h1>

      <div className="projects__cards">
        <ProjectCard
          image={Test}
          title="Amazing Project!"
          description="This is a amazing project, its a some confused and not understate"
        />
        <ProjectCard
          image={Test}
          title="Amazing Project!"
          description="This is a amazing project, its a some confused and not understate"
        />
        <ProjectCard
          image={Test}
          title="Amazing Project!"
          description="This is a amazing project, its a some confused and not understate"
        />
        <ProjectCard
          image={Test}
          title="Amazing Project!"
          description="This is a amazing project, its a some confused and not understate"
        />
      </div>

      <img
        src={LegoBrick}
        alt="lego-brick"
        className="projects__lego-brick projects__lego-brick-left"
      />
      <img
        src={LegoBrick}
        alt="lego-brick"
        className="projects__lego-brick projects__lego-brick-right"
      />

      <a href="#" className="projects__more">See more</a>
    </section>
  );
};

export default Projects;

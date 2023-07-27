import React from "react";

import "./style/skills.scss";
import SkillCard from "./components/skillCard";

const Skills = () => {
  return (
    <section className="skills">
      <h1 className="skills__title">SKILLS</h1>
      <div className="skills__cards">
        <SkillCard title="MongoDB" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="MongoDB" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="React.js" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="MongoDB" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="Photoshop" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="MongoDB" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="Webpack" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="MySQL" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="MongoDB" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="MongoDB" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="MongoDB" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="MongoDB" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="MongoDB" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="MongoDB" level="Basic" description="Can do Queries and keep atlas server"/>
        <SkillCard title="MongoDB" level="Basic" description="Can do Queries and keep atlas server"/>
      </div>
    </section>
  );
};

export default Skills;

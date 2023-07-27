import React from "react";

import "./style/skillCard.scss";

const SkillCard = ({ title, level, description }) => {
  return (
    <div className="skill-card">
      <h1 className="skill-card__title">{title}</h1>
      <section className="skill-card__modal">
        
        <div className="skill-card__modal--box"></div>

        <h1 className="skill-card__modal--title">{title}</h1>
        <h4 className="skill-card__modal--level">{level}</h4>
        <p className="skill-card__modal--description">{description}</p>
      </section>
    </div>
  );
};

export default SkillCard;

import React from "react";

import Me from "./images/picture2.png";
import "./style/about.scss";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">
        ABOU
        <br />T<br />
        ME
      </h1>
      <img src={Me} alt="Me" className="about__image" />
      <p className="about__text">
        Software Developer with experience in Web and IoT development,
        Additionally he has experience operating and learning software programs
        such as Office, image editors, Video editors, 3D editors, game engines
        and others And Christ
      </p>
    </div>
  );
};

export default About;

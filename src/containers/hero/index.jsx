import React from "react";

import Profile1 from "./images/profile.png";
import "./style/hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__background" />

      <section className="hero__content">
        <div className="hero__content--title">
          <section className="title__one-name">
            <h1 className="title__one-name--alternative">NICOLÁS</h1>
            <h1 className="title__one-name--principal">NICOLÁS</h1>
          </section>
          <section className="title__two-name">
            <h1 className="title__two-name--alternative">PRIETO</h1>
            <h1 className="title__two-name--principal">PRIETO</h1>
          </section>
        </div>

        <h4 className="hero__content--description">_|___Programmer____/\____Developer___|_</h4>

        <article className="hero__content--bible">
          <p className="bible__versicle">
            For the Son of man also came not to be ministered unto, but to
            minister, and to give his life a ransom for many.
          </p>
          <h6 className="bible__cite">Mark 10:45 ASV</h6>
        </article>
      </section>

      <img src={Profile1} alt="profile" className="hero__profile-image" />
    </div>
  );
};

export default Hero;

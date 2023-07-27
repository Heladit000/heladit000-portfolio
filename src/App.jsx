import React from "react";

import About from "./containers/about";
import Hero from "./containers/hero";
import Layout from "./containers/layout";
import "./style/App.scss";
import Projects from "./containers/projects";
import Skills from "./containers/skills";

const App = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
        <Projects/>
        <Skills/>
      </Layout>
    </div>
  );
};

export default App;

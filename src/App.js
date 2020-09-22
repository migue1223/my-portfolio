import React from "react";
import AboutCard from "./components/AboutCard";
import ExperienceCard from "./components/ExperienceCard";
import Skills from "./components/SkillsCard/Skills";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Footer from './components/Footer';

import FrontEnd from "./components/SkillsCard/FrontendCard";
import Backend from "./components/SkillsCard/BackendCard";

const App = () => {
  return (
    <React.Fragment>
      <div className="main">
        <section className="section-1">
          <AboutCard />
          <ExperienceCard />
          <Hobbies />
        </section>
        <section className="section-2">
          <div className="skills-section">
            <FrontEnd className="skill" />
            <Backend className="skill" />
          </div>
          <div className="page-main">
            <Skills />
            <Projects />
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;

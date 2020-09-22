import React, { Component } from "react";
import SkillBar from "./Skillbar";

export default class Skills extends Component {
  render() {
    const skills = [
      { id: 1, title: "HTML", percent: "90" },
      { id: 2, title: "CSS", percent: "80" },
      { id: 3, title: "JS", percent: "60" },
      { id: 4, title: "ReactJS", percent: "50" },
      { id: 5, title: "Bootstrap", percent: "60" },
      { id: 6, title: "Mongo DB", percent: "40" },
      { id: 7, title: "Git", percent: "50" },
      { id: 8, title: "MySql", percent: "60" },
      { id: 9, title: "NodeJs", percent: "50" },
      { id: 10, title: "PHP", percent: "70" },
      { id: 11, title: "Jquery", percent: "60" },
      { id: 12, title: "Laravel", percent: "40" },
      { id: 13, title: "Linux", percent: "40" },
      { id: 14, title: "NPM", percent: "50" },
      { id: 15, title: "Python", percent: "40" },
      { id: 16, title: "Angular", percent: "40" },
    ];
    return (
      <section className="section-container skills" data="skills">
        <h2 className="section-title">Skills</h2>

        <section className="skills-mainContent">
          {skills &&
            skills.length > 0 &&
            skills.map((item) => {
              return <SkillBar key={item.id} {...item} />;
            })}
        </section>
      </section>
    );
  }
}

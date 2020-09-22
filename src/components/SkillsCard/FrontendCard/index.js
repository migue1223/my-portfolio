import React from "react";
import "../styles.css";

const FrontendCard = () => {
  return (
    <div className="skills-card">
      <h2> Front-End Skills</h2>
      <div className="skills-icon">
        <i className="devicon-html5-plain-wordmark icon_skill colored"></i>
        <i className="devicon-javascript-plain icon_skill colored"></i>
        <i className="devicon-css3-plain-wordmark icon_skill colored"></i>
        <i className="devicon-bootstrap-plain-wordmark icon_skill colored"></i>
        <i className="devicon-react-original-wordmark icon_skill colored"></i>
      </div>
    </div>
  );
};

export default FrontendCard;

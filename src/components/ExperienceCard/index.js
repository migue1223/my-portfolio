import React from "react";
import "./styles.css";

const ExperienceCard = () => {
  return (
    <div id="exp-card">
      <h2>Experience</h2>
      <div className="card-content">
        <div className="work-description">
          <p>June 2019 - currently working</p>
          <h3>Full Stack Web Developer</h3>
          <p>He helped some Colombian companies improve their businesses in:</p>
          <ul>
            <li>Creation of websites such as CMS, Ecommerce, Payroll, Inventories ...</li>
            <li>Maintaining existing sites and projects</li>
            <li>Fix any existing bug</li>
            <li>Develop backend APIs</li>
            <li>Database administration</li>
          </ul>
          Profile Link:{" "}
          <b>
            <a href="/"> </a>{" "}
          </b>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
};

export default ExperienceCard;

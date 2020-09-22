import React from "react";
import "../styles.css";
// import { ReactComponent as Logo } from "../../../Media/img/flask.svg";

const BackendCard = () => {
  return (
    <div className="skills-card">
      <h2> Back-End &amp; Databases Skills </h2>
      <div className="skills-icon">
        <i className="devicon-mongodb-plain-wordmark icon_skill colored"></i>
        <i className="devicon-git-plain-wordmark icon_skill colored"></i>
        <i className="devicon-mysql-plain-wordmark icon_skill colored"></i>
        <i className="devicon-nodejs-plain-wordmark icon_skill colored"></i>
        <i className="devicon-php-plain icon_skill colored"></i>
        <i className="devicon-javascript-plain icon_skill"></i>
        <i className="devicon-jquery-plain-wordmark icon_skill colored"></i>
        <i className="devicon-laravel-plain-wordmark icon_skill colored"></i>
        <i className="devicon-linux-plain icon_skill colored"></i>
        <i className="devicon-npm-original-wordmark icon_skill colored"></i>
        <i className="devicon-python-plain-wordmark icon_skill colored"></i>
        <i className="devicon-angularjs-plain icon_skill colored"></i>
        {/* <Logo className="flask-icon" /> */}
      </div>
    </div>
  );
};

export default BackendCard;

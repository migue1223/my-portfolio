import React from "react";
import imagePerfil from "../../Media/img/imagePerfil.jpeg";
import "./styles.css";

const AboutCard = () => {
  return (
    <div id="about-card">
      <img src={imagePerfil} alt="Jonathan Jimémez S" />
      <h3 className="card-item-title">Jonathan Jiménez S</h3>
      <h4>Aspiring Full Stack Web Developer</h4>
      <p>
        <i className="material-icons lg-24">email</i>
        &nbsp;&nbsp;jta1223@gmail.com
      </p>
      <p>
        <i className="material-icons lg-24">phone</i>&nbsp;&nbsp;+573168850497{" "}
      </p>
      <p className="description">
      I am an aspiring Full Stack Web Developer, willing to learn and make good user experience products. I am passionate about web development and I love building randoms stuff. I work on my skills every day to gain more knowledge and stay current in the rapidly growing technology industry.
      </p>
    </div>
  );
};

export default AboutCard;
import React from "react";
import imagePerfil from "../../Media/img/imagePerfil.jpeg";
import "./styles.css";

const AboutCard = () => {
  return (
    <div id="about-card">
      <img src={imagePerfil} alt="Jonathan Jimémez S" />
      <h3 className="card-item-title">Jonathan Jiménez S</h3>
      <h4>Desarrollador Web Full Stack | 5 años de experiencia | Innovador y orientado a la experiencia del usuario</h4>
      <p>
        <i className="material-icons lg-24">email</i>
        &nbsp;&nbsp;jta1223@gmail.com
      </p>
      <p>
        <i className="material-icons lg-24">phone</i>&nbsp;&nbsp;+573168850497{" "}
      </p>
      <p className="description">
      Apasionado por el desarrollo web y comprometido con la creación de soluciones que ofrecen una excelente experiencia de usuario. Cuento con más de 5 años de experiencia desarrollando aplicaciones web y móviles con enfoque en el diseño responsive, rendimiento y optimización para SEO. Mi filosofía de trabajo se basa en el aprendizaje continuo, lo que me permite mantenerme al día con las tecnologías emergentes y las mejores prácticas de la industria. Siempre dispuesto a enfrentar nuevos desafíos y desarrollar productos innovadores que hagan la vida más fácil para los usuarios.
      </p>
    </div>
  );
};

export default AboutCard;
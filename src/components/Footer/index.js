import React from "react";
import './styles.css';

const Footer = () => {
  return (
    <footer className="page-footer">
      <a
        href="https://www.linkedin.com/in/jonathan-jimenez-a78092162/"
        alt="Perfil Linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="devicon-linkedin-plain icon_skill colored"></i>
      </a>
      <a
        href="https://twitter.com/Jonatha55352449"
        alt="Perfil Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="devicon-twitter-original icon_skill colored"></i>
      </a>
      <a
        href="https://github.com/migue1223"
        alt="Perfil Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="devicon-github-original icon_skill colored"></i>
      </a>
      <a
        href="https://www.facebook.com/jonathan.jimenezs"
        alt="Perfil Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="devicon-facebook-original icon_skill colored"></i>
      </a>
    </footer>
  );
};

export default Footer;

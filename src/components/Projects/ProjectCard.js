import React from "react";
import './styles.css';

const ProjectCard = ({
  id,
  name,
  category,
  url,
  image,
  description,
  tags,
  certificate,
}) => {
  return (
    <article key={id} className="section-container projectCard">
      <figure className="projectCard__image-container">
        <img src={image} alt={name} className="projectCard__image" />
      </figure>

      <div className="projectCard__info">
        <p className="projectCard__tags">
          {tags && tags.map((e) => `#${e}`).join(" ")}
        </p>

        <h3 className="projectCard__name">{name || ""}</h3>
        <p className="projectCard__description">
          {description ||
            "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. "}
        </p>
        <div className="projectCard__btn-group">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard__btn projectCard__btn--demo"
          >
            Demo
          </a>

          {certificate &&
            <a href={certificate} target="_blank" rel="noopener noreferrer">
              <button className="projectCard__btn projectCard__btn--code">
                Certificate
              </button>
            </a>
          }
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

import React from 'react';
import './styles.css';

const ExperienceCard = () => {
  return (
    <div id='exp-card'>
      <h2>Experiencia</h2>
      <div className='card-content'>
        <div className='work-description'>
          <p>Junio 2019 - actualmente</p>
          <h3>Full Stack Web Developer</h3>
          <p>Ayudo a algunas empresas colombianas a mejorar sus negocios en:</p>
          <ul>
            <li>
              Creación de sitios web como CMS, Ecommerce, Nóminas, Inventarios,
              Blogs ...
            </li>
            <li>Mantenimiento de sitios y proyectos existentes.</li>
            <li>Corregir errores.</li>
            <li>Desarrollo de API Rest Full.</li>
            <li>Administración de bases de datos.</li>
            <li>SEO.</li>
          </ul>
          Profile Link:{' '}
          <b>
            <a href='/'> </a>{' '}
          </b>
        </div>
        <hr className='divider' />
      </div>
    </div>
  );
};

export default ExperienceCard;

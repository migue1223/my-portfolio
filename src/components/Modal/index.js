import React from 'react';
import ReactDOM from 'react-dom';
import { coursesData } from '../Hobbies/courses.data.js';

import './styles.css';

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  const getIdExperience = props.keyExperience;
  const dataCourses = coursesData[0][getIdExperience];

  return ReactDOM.createPortal(
    <div className='Modal'>
      <div className='Modal__container'>
        <button onClick={props.onClose} className='Modal__close-button'>
          <p>X</p>
        </button>
        {dataCourses.map((course) => (
          <div key={course.idCourse} className='Courses__container'>
            <div className='Container__infoCourse'>
              <figure>
                <img src={course.urlImageCourse} alt={course.nameCourse} />
              </figure>
              {/* <h2>{course.nameCourse}</h2>
              {course.urlCertificateCourse && (
                <a href='{course.urlCertificateCourse}'>Certificate</a>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;

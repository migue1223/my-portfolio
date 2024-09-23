import React, { useState } from "react";
import Modal from "../Modal";

const MyHobbies = (
  { id, college, course, urlCourse, urlCertificate, image, description, ano },
  props
) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idExperience, setIdExperience] = useState(null);

  const onOpenModal = () => {
    setIdExperience(id);
    setModalIsOpen(true);
  };
  const onCloseModal = () => {
    setIdExperience(null);
    setModalIsOpen(false);
  };
  return (
    <div key={id} >
      <img src={image} alt={course} />
      <a href={urlCourse} target="_blank" rel="noopener noreferrer">
        <h3 className="card-item-title">
          {college} {course}
        </h3>
      </a>
      <h6>Año: {ano}</h6>
      {/* <p>{description}</p> */}
      {/* <a href={urlCertificate} target="_blank" rel="noopener noreferrer">
        Certificate
      </a> */}
      <button path={urlCertificate} onClick={onOpenModal} className="btn btn-danger">
        Ver
      </button>
      <Modal keyExperience={idExperience} isOpen={modalIsOpen} onClose={onCloseModal} />
      <div className="divider"></div>
    </div>
  );
};

export default MyHobbies;

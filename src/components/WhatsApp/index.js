import React from 'react';
import './style.css';

const WhatsApp = () => {
  const handleClick = () => {
    // Puedes cambiar este número de teléfono al tuyo
    window.open('https://wa.me/573168850497', '_blank');
  };

  return (
    <div className='whatsapp-button' onClick={handleClick}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
        alt='WhatsApp'
        className='whatsapp-icon'
      />
    </div>
  );
};

export default WhatsApp;

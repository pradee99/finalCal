import React from 'react';
import './SButton.css';  // Ensure this file exists


const SButton = ({ label, onClick }) => {
  return (
    <button className="sbutton" onClick={onClick}>
      {label}
    </button>
  );
};

export default SButton;

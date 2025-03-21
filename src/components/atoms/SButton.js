import React from 'react';

const SButton = ({ label, onClick }) => {
  return (
    <button className="sbutton" onClick={onClick}>
      {label}
    </button>
  );
};

export default SButton;

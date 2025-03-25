import React from 'react';
import './Display.css';

const Display = ({ value, ...props }) => {
  return <div className="display" {...props}>{value}</div>;
};

export default Display;


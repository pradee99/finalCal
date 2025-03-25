import React from 'react';
import Button from '../atoms/Button/Button';
import ButtonGroup from '../atoms/buttongroup/ButtonGroup';

const ScientificKeypad = ({ onClick }) => {
  const buttons = [
    'sin', 'cos', 'tan', '√','(', ')','.','+', '7', '8', '9', '/', '4', '5', '6', '*',
    '1', '2', '3', '-', '0',  '=',  'C'
  ];

  return (
    <ButtonGroup>
      {buttons.map((label) => (
        <Button key={label} label={label} onClick={() => onClick(label)} />
      ))}
    </ButtonGroup>
  );
};

export default ScientificKeypad;

import React, { useState } from 'react';
import Display from '../atoms/Display';
import SimpleKeypad from '../molecules/SimpleKeypad';
import ScientificKeypad from '../molecules/ScientificKeypad';
import SButton from '../atoms/SButton';

const CalculatorLayout = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isScientific, setIsScientific] = useState(false); // State to track the mode

  const handleButtonClick = (label) => {
    if (label === '=') {
      try {
        const calculationResult = eval(input).toString();  // Evaluating the input expression
        setResult(calculationResult);
        setInput('');
      } catch (error) {
        setResult('Error');
        setInput('');
      }
    } else if (label === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + label);
    }
  };

  const toggleMode = () => {
    setIsScientific((prevMode) => !prevMode); // Toggle between simple and scientific modes
  };

  return (
    <div className="calculator">
      <Display value={input || result || '0'} />
      <div className="button-group">
        <SButton label={isScientific ? 'Simple' : 'Scientific'} onClick={toggleMode} />
      </div>
      {isScientific ? (
        <ScientificKeypad onClick={handleButtonClick} />
      ) : (
        <SimpleKeypad onClick={handleButtonClick} />
      )}
    </div>
  );
};

export default CalculatorLayout;


import React, { useState } from 'react';
import Display from '../atoms/display/Display';
import SimpleKeypad from '../molecules/SimpleKeypad';
import ScientificKeypad from '../molecules/ScientificKeypad';
import SButton from '../atoms/SButton';
import { calculateResult } from '../../utils/CalculatorUtils'; 

const CalculatorLayout = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isScientific, setIsScientific] = useState(false);

  const handleButtonClick = (label) => {
    if (label === '=') {
      try {
        const calculationResult = calculateResult(input); // Use the external calculateResult function
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
    setIsScientific((prevMode) => !prevMode);
  };

  return (
    <div className="calculator">
      <Display value={input || result || '0'} data-testid="display" />
      <div className="button-group">
        {/* Move the button inside CalculatorLayout to toggle mode */}
        <SButton 
          label={isScientific ? 'Simple' : 'Scientific'} 
          onClick={toggleMode} 
        />
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

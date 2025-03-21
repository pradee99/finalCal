import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SimpleCalculatorPage from './pages/SimpleCalculatorPage';
import ScientificCalculatorPage from './pages/ScientificCalculatorPage';
import './components/styles/Calculator.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SimpleCalculatorPage />} />
        <Route path="/scientific" element={<ScientificCalculatorPage />} />
      </Routes>
    </Router>
  );
};

export default App;



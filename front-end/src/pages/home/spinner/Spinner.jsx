import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-content">
        <h1 className="spinner-hi">Hi,</h1>
        <h2 className="spinner-welcome">Welcome</h2>
      </div>
    </div>
  );
};

export default Spinner;


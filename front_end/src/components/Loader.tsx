import React from 'react';
import './Loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="spinner"></div>
        <p className="loader-text">Loading Virasat...</p>
      </div>
    </div>
  );
};

export default Loader;

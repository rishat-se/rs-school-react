import React from 'react';
import './ProgressIndicator.css';

function ProgressIndicator() {
  return (
    <div className="progress-indicator">
      <div className="progress-img__container">
        <div className="progress-spinner"></div>
      </div>
      <span>Sit tight... Opening Portal...</span>
    </div>
  );
}

export default ProgressIndicator;

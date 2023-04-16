import React from 'react';
import './ErrorMessage.css';

type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div role="alert" className="error-msg" aria-label="error message">
      <h2>ERROR</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;

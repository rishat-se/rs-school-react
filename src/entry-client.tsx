import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrateRoot(
  document.getElementById('app') as Element,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

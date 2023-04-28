import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

//console.log(window.__PRELOADED_STATE__);

ReactDOM.hydrateRoot(
  document.getElementById('app') as Element,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

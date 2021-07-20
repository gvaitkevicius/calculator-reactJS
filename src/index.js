import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Calculadora</h1>
    </div>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

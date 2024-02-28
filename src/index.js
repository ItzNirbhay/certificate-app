import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Make sure this path is correct based on your project structure
import './index.css'; // You can import your main CSS file here if needed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

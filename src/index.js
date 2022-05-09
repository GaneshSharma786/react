import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import First from './component/first';
import Second from './component/second';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <First name="ganesh" age="21" />
    <First name="prshad" age="22" />
    <First name="sharma" age="23" />
    <Second name="ganesh" age="24" />
    <Second name="parshad" age="25" />
    <Second name="sharma" age="26" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

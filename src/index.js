import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/styles.css'
import LayoutUI from './components/Layout/layoutUI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LayoutUI/>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { mockData } from './mocks/mocks';

ReactDOM.render(
  <React.StrictMode>
    <App
      filmsData = {mockData}
    />
  </React.StrictMode>,
  document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { mockFilms } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App filmsData={mockFilms} />
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {FilmType} from './types/film';

const mockData: FilmType[] = [
  {
    'id': 1,
    'name': 'The Grand Budapest Hotel',
    'posterImage': 'the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'the-grand-budapest-hotel-poster.jpg',
    'backgroundImage': 'bg-the-grand-budapest-hotel.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://some-link',
    'previewVideoLink': 'https://some-link',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 8.9,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2014,
    'isFavorite': false,
  },
  {
    'id': 2,
    'name': 'dardjeeling-limited',
    'posterImage': 'dardjeeling-limited.jpg',
    'previewImage': 'dardjeeling-limited.jpg',
    'backgroundImage': 'img/the-grand-budapest-hotel-bg.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://some-link',
    'previewVideoLink': 'https://some-link',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 8.9,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2014,
    'isFavorite': false,
  },
  {
    'id': 3,
    'name': 'fantastic-beasts-the-crimes-of-grindelwald',
    'posterImage': 'fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'previewImage': 'fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'backgroundImage': 'img/the-grand-budapest-hotel-bg.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://some-link',
    'previewVideoLink': 'https://some-link',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 8.9,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2014,
    'isFavorite': false,
  },
  {
    'id': 4,
    'name': 'johnny-english',
    'posterImage': 'johnny-english.jpg',
    'previewImage': 'johnny-english.jpg',
    'backgroundImage': 'img/the-grand-budapest-hotel-bg.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://some-link',
    'previewVideoLink': 'https://some-link',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 8.9,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2014,
    'isFavorite': false,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      filmsData = {mockData}
    />
  </React.StrictMode>,
  document.getElementById('root'));

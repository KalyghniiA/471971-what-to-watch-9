import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

type MockData = {
  id: number,
  name: string,
  image: string,
  description: string,
};

type MockMainCard = {
  image: string,
  bgImage: string,
  name: string,
  genre: string,
  data: number,
}

const mockData: MockData[] = [
  {
    id: 1,
    name: 'bohemian-rhapsody',
    image: 'bohemian-rhapsody.jpg',
    description: 'bjdslfkhjalkusehbfklhjbklvajbsxlkvjbadslkjbvalsdkjbv',
  },
  {
    id: 2,
    name: 'dardjeeling-limited',
    image: 'dardjeeling-limited.jpg',
    description: 'bjdslfkhjalkusehbfklhjbklvajbsxlkvjbadslkjbvalsdkjbv',
  },
  {
    id: 3,
    name: 'fantastic-beasts-the-crimes-of-grindelwald',
    image: 'fantastic-beasts-the-crimes-of-grindelwald.jpg',
    description: 'bjdslfkhjalkusehbfklhjbklvajbsxlkvjbadslkjbvalsdkjbv',
  },
  {
    id: 4,
    name: 'johnny-english',
    image: 'johnny-english.jpg',
    description: 'bjdslfkhjalkusehbfklhjbklvajbsxlkvjbadslkjbvalsdkjbv',
  },
];

const mockMainCard: MockMainCard = {
  image: 'the-grand-budapest-hotel-poster.jpg',
  bgImage: 'bg-the-grand-budapest-hotel.jpg',
  name: 'the-grand-budapest-hotel',
  genre: 'Drama',
  data: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      mainCardData = {mockMainCard}
      cardsData = {mockData}
    />
  </React.StrictMode>,
  document.getElementById('root'));

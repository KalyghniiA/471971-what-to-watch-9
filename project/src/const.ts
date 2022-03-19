import { DictionaryGenre } from './types/dictionary';

export enum AppRoute {
  Root = '/',
  Film = '/films',
  Login = '/login',
  MyList = '/mylist',
  Player = '/player',
  AddReview = 'add-review',
}

export enum CatalogTitle {
  Main = 'Catalog',
  Card = 'More like this',
  MyList = 'Catalog',
}

export enum CatalogTitleClassName {
  Main = 'visually-hidden',
  MyList = 'visually-hidden',
}

export enum CatalogClassName {
  Card = 'catalog--like-this',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FilmCardTabsValue {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum FilmCardTabActiveClassName {
  Active = 'film-nav__item--active',
}

export enum CommentLength {
  Min = 50,
  Max = 300,
}

export const genres: DictionaryGenre = {
  'All Genres': 'All Genres',
  Comedy: 'Comedies',
  Crime: 'Crime',
  Documentary: 'Documentary',
  Drama: 'Dramas',
  Horror: 'Horror',
  Family: 'Kids & Family',
  Romance: 'Romance',
  'Sci-Fi': 'Sci-Fi',
  Thriller: 'Thrillers',
};

export enum ViewLink {
  Main = 'Main',
  Card = 'Card',
  List = 'List',
}

export enum QuantityCards {
  Main = 8,
  Card = 4,
}

export const StepShowCard = 4;

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
  AddReview = 'AddReview',
}

export enum QuantityCards {
  Main = 8,
  Card = 4,
}

export const STEP_SHOW_CARD = 4;

export const APIRoute = {
  films: () => '/films',
  film: (id: number) => `/films/${id}`,
  similarFilms: (id: number) => `/films/${id}/similar`,
  promo: () => '/promo',
  favorite: () => '/favorite',
  changeStatusFilm: (id: number, status: number) => `/favorite/${id}/${status}`,
  comments: (id: number) => `/comments/${id}`,
  login: () => '/login',
  logout: () => '/logout',
};

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum LoadingStatus {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Succeeded = 'SUCCEEDED',
  Failed = 'FAILED',
}

export enum NameSpase {
  Login = 'LOGIN',
  FilmData = 'FILM_DATA',
  FavoriteFilmData = 'FAVORITE_FILM_DATA',
  ReviewData = 'REVIEW_DATA',
  App = 'APP',
  Video = 'VIDEO',
}

export enum VideoPlaying {
  Play = 'PLAY',
  Pause = 'PAUSE',
}

export const FilmGrade = {
  Bad: {
    MIN: 0,
    MAX: 2,
  },
  Normal: {
    MIN: 2,
    MAX: 4,
  },
  Good: {
    MIN: 4,
    MAX: 6,
  },
  VeryGood: {
    MIN: 6,
    MAX: 8,
  },
  Awesome: {
    MIN: 8,
    MAX: 10,
  },
};

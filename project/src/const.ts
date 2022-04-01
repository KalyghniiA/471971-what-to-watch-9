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
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum LoadingStatus {
  //'idle' | 'loading' | 'succeeded' | 'failed'
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

export enum NameSpase {
  login = 'LOGIN',
  data = 'DATA',
  app = 'APP',
}

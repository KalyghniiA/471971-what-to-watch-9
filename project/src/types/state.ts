import { store } from '../store';
import { Film as FilmType } from './film';
import { Review as ReviewType } from './review';
import { AuthorizationStatus, QuantityCards, ViewLink } from '../const';

export type State = ReturnType<typeof store.getState>;

export type InitialState = {
  activeGenre: string;
  films: FilmType[];
  promoFilm: FilmType | null;
  film: FilmType | null;
  similarFilms: FilmType[];
  reviews: ReviewType[];
  activeLink: ViewLink;
  quantityShownCards: QuantityCards;
  authorizationStatus: AuthorizationStatus;
  isFilmsDataLoaded: boolean;
  isFilmDataLoaded: boolean;
  isSimilarFilmsDataLoaded: boolean;
  isPromoFilmDataLoaded: boolean;
};

export type AppDispatch = typeof store.dispatch;

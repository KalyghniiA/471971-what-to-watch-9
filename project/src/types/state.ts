import { store } from '../store';
import { Film as FilmType } from './film';
import { Review as ReviewType } from './review';
import { AuthorizationStatus, LoadingStatus, QuantityCards, ViewLink } from '../const';

export type State = ReturnType<typeof store.getState>;

export type InitialStateUserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type InitialStateFilmDataProcess = {
  films: FilmType[];
  promoFilm: FilmType | null;
  film: FilmType | null;
  similarFilms: FilmType[];
  isFilmsStatus: LoadingStatus;
  isFilmStatus: LoadingStatus;
  isSimilarFilmsStatus: LoadingStatus;
  isPromoFilmStatus: LoadingStatus;
  updateIsFavoriteFilmStatus: LoadingStatus;
};

export type InitialStateFavoriteFilmDataProcess = {
  favoriteFilms: FilmType[];
  isFavoriteFilmsStatus: LoadingStatus;
};

export type InitialStateReviewDataProcess = {
  reviews: ReviewType[];
  isReviewsStatus: LoadingStatus;
  isPostingCommentStatus: LoadingStatus;
};

export type InitialStateAppProcess = {
  activeGenre: string;
  activeLink: ViewLink;
  quantityShownCards: QuantityCards;
};

export type AppDispatch = typeof store.dispatch;

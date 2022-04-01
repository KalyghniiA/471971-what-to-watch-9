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
  favoriteFilms: FilmType[];
  reviews: ReviewType[];
  isFilmsStatus: LoadingStatus;
  isFilmStatus: LoadingStatus;
  isSimilarFilmsStatus: LoadingStatus;
  isPromoFilmStatus: LoadingStatus;
  isFavoriteFilmsStatus: LoadingStatus;
  isReviewsStatus: LoadingStatus;
  isPostingCommentStatus: LoadingStatus;
};

export type InitialStateAppProcess = {
  activeGenre: string;
  activeLink: ViewLink;
  quantityShownCards: QuantityCards;
};

export type AppDispatch = typeof store.dispatch;

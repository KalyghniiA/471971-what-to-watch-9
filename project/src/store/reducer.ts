import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, genres, LoadingStatus, QuantityCards, STEP_SHOW_CARD, ViewLink } from '../const';
import {
  changeCommentButtonStatus,
  increaseLimit,
  loadFavoriteFilms,
  loadFilm,
  loadFilms,
  loadPromoFilm,
  loadReviews,
  loadSimilarFilms,
  requireAuthorization,
  resetLoadDataStatus,
  resetShownCards,
  selectGenre,
  selectViewLink,
  updateCommentsData,
  updateIsFavoriteFilm,
  updateIsFavoritePromoFilm
} from './action';
import { InitialState as InitialStateType } from '../types/state';

const initialState: InitialStateType = {
  activeGenre: genres['All Genres'],
  films: [],
  promoFilm: null,
  film: null,
  similarFilms: [],
  favoriteFilms: [],
  reviews: [],
  activeLink: ViewLink.Main,
  quantityShownCards: QuantityCards.Main,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoaded: false,
  isFilmDataLoaded: false,
  isSimilarFilmsDataLoaded: false,
  isPromoFilmDataLoaded: false,
  isFavoriteFilmsDataLoaded: false,
  isReviewsDataLoaded: false,
  isPostingCommentStatus: LoadingStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(selectViewLink, (state, action) => {
      state.activeLink = action.payload;
    })
    .addCase(increaseLimit, (state) => {
      state.quantityShownCards += STEP_SHOW_CARD;
    })
    .addCase(resetShownCards, (state) => {
      state.quantityShownCards = QuantityCards.Main;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isFilmsDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
      state.isPromoFilmDataLoaded = true;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
      state.isFilmDataLoaded = true;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
      state.isSimilarFilmsDataLoaded = true;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
      state.isFavoriteFilmsDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(resetLoadDataStatus, (state) => {
      state.isFilmDataLoaded = false;
      state.isSimilarFilmsDataLoaded = false;
      state.isReviewsDataLoaded = false;
    })
    .addCase(changeCommentButtonStatus, (state, action) => {
      state.isPostingCommentStatus = action.payload;
    })
    .addCase(updateCommentsData, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(updateIsFavoriteFilm, (state, action) => {
      const index = state.films.findIndex((film) => film.id === action.payload.id);
      if (index !== -1) {
        state.films[index].isFavorite = action.payload.isFavorite;
      }
    })
    .addCase(updateIsFavoritePromoFilm, (state, action) => {
      if (state.promoFilm !== null) {
        state.promoFilm.isFavorite = action.payload.isFavorite;
      }
    });
});

export { reducer };

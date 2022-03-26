import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, genres, QuantityCards, STEP_SHOW_CARD, ViewLink } from '../const';
import {
  increaseLimit,
  loadFilm,
  loadFilms,
  loadPromoFilm,
  loadReviews,
  loadSimilarFilms,
  requireAuthorization,
  resetShownCards,
  selectGenre,
  selectViewLink
} from './action';
import { InitialState as InitialStateType } from '../types/state';

const initialState: InitialStateType = {
  activeGenre: genres['All Genres'],
  films: [],
  promoFilm: null,
  film: null,
  similarFilms: [],
  reviews: [],
  activeLink: ViewLink.Main,
  quantityShownCards: QuantityCards.Main,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoaded: false,
  isFilmDataLoaded: false,
  isSimilarFilmsDataLoaded: false,
  isPromoFilmDataLoaded: false,
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
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };

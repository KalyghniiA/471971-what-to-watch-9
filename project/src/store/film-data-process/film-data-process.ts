import { LoadingStatus, NameSpase } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { InitialStateFilmDataProcess } from '../../types/state';

const initialState: InitialStateFilmDataProcess = {
  films: [],
  promoFilm: null,
  film: null,
  similarFilms: [],
  favoriteFilms: [],
  reviews: [],
  isFilmsStatus: LoadingStatus.IDLE,
  isFilmStatus: LoadingStatus.IDLE,
  isSimilarFilmsStatus: LoadingStatus.IDLE,
  isPromoFilmStatus: LoadingStatus.IDLE,
  isFavoriteFilmsStatus: LoadingStatus.IDLE,
  isReviewsStatus: LoadingStatus.IDLE,
  isPostingCommentStatus: LoadingStatus.IDLE,
};

export const filmDataProcess = createSlice({
  name: NameSpase.data,
  initialState,
  reducers: {
    loadingFilms: (state) => {
      state.isFilmsStatus = LoadingStatus.LOADING;
    },
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isFilmsStatus = LoadingStatus.SUCCEEDED;
    },
    errorLoadFilms: (state) => {
      state.isFilmsStatus = LoadingStatus.FAILED;
    },
    loadingPromoFilm: (state) => {
      state.isPromoFilmStatus = LoadingStatus.LOADING;
    },
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
      state.isPromoFilmStatus = LoadingStatus.SUCCEEDED;
    },
    errorLoadPromoFilm: (state) => {
      state.isPromoFilmStatus = LoadingStatus.FAILED;
    },
    loadingFilm: (state) => {
      state.isFilmStatus = LoadingStatus.LOADING;
    },
    loadFilm: (state, action) => {
      state.film = action.payload;
      state.isFilmStatus = LoadingStatus.SUCCEEDED;
    },
    loadingSimilarFilms: (state) => {
      state.isSimilarFilmsStatus = LoadingStatus.LOADING;
    },
    loadSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
      state.isSimilarFilmsStatus = LoadingStatus.SUCCEEDED;
    },
    loadingFavoriteFilms: (state) => {
      state.isFavoriteFilmsStatus = LoadingStatus.LOADING;
    },
    loadFavoriteFilms: (state, action) => {
      state.favoriteFilms = action.payload;
      state.isFavoriteFilmsStatus = LoadingStatus.SUCCEEDED;
    },
    loadingReviews: (state) => {
      state.isReviewsStatus = LoadingStatus.LOADING;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
      state.isReviewsStatus = LoadingStatus.SUCCEEDED;
    },
    resetLoadDataStatus: (state) => {
      state.film = null;
      state.similarFilms = [];
      state.reviews = [];
      state.isFilmStatus = LoadingStatus.IDLE;
      state.isSimilarFilmsStatus = LoadingStatus.IDLE;
      state.isReviewsStatus = LoadingStatus.IDLE;
    },
    postingReview: (state) => {
      state.isReviewsStatus = LoadingStatus.LOADING;
    },
    updateReviewsData: (state, action) => {
      state.reviews = action.payload;
      state.isReviewsStatus = LoadingStatus.SUCCEEDED;
    },
  },
});

export const {
  loadFilm,
  loadingFilm,
  loadFilms,
  loadingFilms,
  errorLoadFilms,
  loadPromoFilm,
  loadingPromoFilm,
  errorLoadPromoFilm,
  loadFavoriteFilms,
  loadingFavoriteFilms,
  loadSimilarFilms,
  loadingSimilarFilms,
  loadReviews,
  loadingReviews,
  postingReview,
  updateReviewsData,
  resetLoadDataStatus,
} = filmDataProcess.actions;

/* .addCase(updateIsFavoriteFilm, (state, action) => {
    const index = state.films.findIndex((film) => film.id === action.payload.id);
    if (index !== -1) {
      state.films[index].isFavorite = action.payload.isFavorite;
    }
  })
  .addCase(updateIsFavoritePromoFilm, (state, action) => {
    if (state.promoFilm !== null) {
      state.promoFilm.isFavorite = action.payload.isFavorite;
    }
  });*/

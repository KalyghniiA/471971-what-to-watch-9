import { APIRoute, LoadingStatus, NameSpase } from '../../const';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { Film as FilmType } from '../../types/film';
import { errorHandle } from '../../services/error-handle';
import { redirectToRoute } from '../action';
import { AxiosInstance } from 'axios';
import { updateIsFavoriteFilmAction } from '../favorite-film-data-process/favorite-film-data-process';

type InitialState = {
  films: FilmType[];
  promoFilm: FilmType | null;
  film: FilmType | null;
  similarFilms: FilmType[];
  filmsStatus: LoadingStatus;
  filmStatus: LoadingStatus;
  similarFilmsStatus: LoadingStatus;
  promoFilmStatus: LoadingStatus;
};

const initialState: InitialState = {
  films: [],
  promoFilm: null,
  film: null,
  similarFilms: [],
  filmsStatus: LoadingStatus.Idle,
  filmStatus: LoadingStatus.Idle,
  similarFilmsStatus: LoadingStatus.Idle,
  promoFilmStatus: LoadingStatus.Idle,
};

export const fetchFilmsAction = createAsyncThunk<
  FilmType[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { extra: api }) => {
  try {
    const { data } = await api.get<FilmType[]>(APIRoute.films());
    return data;
  } catch (err) {
    errorHandle(err);
    throw err;
  }
});

export const fetchFilmAction = createAsyncThunk<
  FilmType,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilm', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<FilmType>(APIRoute.film(id));
    return data;
  } catch (err) {
    errorHandle(err);
    dispatch(redirectToRoute('/404'));
    throw err;
  }
});

export const fetchPromoFilmAction = createAsyncThunk<
  FilmType,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromoFilm', async (_arg, { extra: api }) => {
  try {
    const { data } = await api.get<FilmType>(APIRoute.promo());
    return data;
  } catch (err) {
    errorHandle(err);
    throw err;
  }
});

export const fetchSimilarFilmsAction = createAsyncThunk<
  FilmType[],
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchSimilarFilms', async (id, { extra: api }) => {
  try {
    const { data } = await api.get<FilmType[]>(APIRoute.similarFilms(id));
    return data;
  } catch (err) {
    errorHandle(err);
    throw err;
  }
});

export const filmDataProcess = createSlice({
  name: NameSpase.FilmData,
  initialState,
  reducers: {
    resetLoadDataStatus: (state) => {
      state.film = null;
      state.similarFilms = [];
      state.filmStatus = LoadingStatus.Idle;
      state.similarFilmsStatus = LoadingStatus.Idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.filmsStatus = LoadingStatus.Loading;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, { payload }) => {
        state.films = payload;
        state.filmsStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.filmsStatus = LoadingStatus.Failed;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.filmStatus = LoadingStatus.Loading;
      })
      .addCase(fetchFilmAction.fulfilled, (state, { payload }) => {
        state.film = payload;
        state.filmStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.filmStatus = LoadingStatus.Failed;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.promoFilmStatus = LoadingStatus.Loading;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, { payload }) => {
        state.promoFilm = payload;
        state.promoFilmStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.promoFilmStatus = LoadingStatus.Failed;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.similarFilmsStatus = LoadingStatus.Loading;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, { payload }) => {
        state.similarFilms = payload;
        state.similarFilmsStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.similarFilmsStatus = LoadingStatus.Failed;
      })
      .addCase(updateIsFavoriteFilmAction.fulfilled, (state, { payload }) => {
        const index = state.films.findIndex((film) => film.id === payload.id);
        if (index !== -1) {
          state.films[index].isFavorite = payload.isFavorite;
        }

        if (index === state.promoFilm?.id) {
          state.promoFilm = payload;
        }
      });
  },
});

const selectFilmsState = (state: State) => state[NameSpase.FilmData];

export const selectFilms = (state: State) => selectFilmsState(state).films;
export const selectFilm = (state: State) => selectFilmsState(state).film;
export const selectPromoFilm = (state: State) => selectFilmsState(state).promoFilm;
export const selectSimilarFilms = (state: State) => selectFilmsState(state).similarFilms;
export const selectFilmsStatus = (state: State) => selectFilmsState(state).filmsStatus;
export const selectFilmStatus = (state: State) => selectFilmsState(state).filmStatus;
export const selectPromoFilmStatus = (state: State) => selectFilmsState(state).promoFilmStatus;
export const selectSimilarFilmsStatus = (state: State) => selectFilmsState(state).similarFilmsStatus;

export const { resetLoadDataStatus } = filmDataProcess.actions;

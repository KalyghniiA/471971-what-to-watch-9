import { APIRoute, LoadingStatus, NameSpase } from '../../const';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, InitialStateFilmDataProcess, State } from '../../types/state';
import { Film as FilmType } from '../../types/film';
import { errorHandle } from '../../services/error-handle';
import { redirectToRoute } from '../action';
import { AxiosInstance } from 'axios';
import { updateIsFavoriteFilmAction } from '../favorite-film-data-process/favorite-film-data-process';

const initialState: InitialStateFilmDataProcess = {
  films: [],
  promoFilm: null,
  film: null,
  similarFilms: [],
  isFilmsStatus: LoadingStatus.IDLE,
  isFilmStatus: LoadingStatus.IDLE,
  isSimilarFilmsStatus: LoadingStatus.IDLE,
  isPromoFilmStatus: LoadingStatus.IDLE,
  updateIsFavoriteFilmStatus: LoadingStatus.IDLE,
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
  name: NameSpase.filmData,
  initialState,
  reducers: {
    resetLoadDataStatus: (state) => {
      state.film = null;
      state.similarFilms = [];
      state.isFilmStatus = LoadingStatus.IDLE;
      state.isSimilarFilmsStatus = LoadingStatus.IDLE;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, { payload }) => {
        state.films = payload;
        state.isFilmsStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isFilmsStatus = LoadingStatus.FAILED;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchFilmAction.fulfilled, (state, { payload }) => {
        state.film = payload;
        state.isFilmStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isFilmStatus = LoadingStatus.FAILED;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoFilmStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, { payload }) => {
        state.promoFilm = payload;
        state.isPromoFilmStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.isPromoFilmStatus = LoadingStatus.FAILED;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isSimilarFilmsStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, { payload }) => {
        state.similarFilms = payload;
        state.isSimilarFilmsStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.isSimilarFilmsStatus = LoadingStatus.FAILED;
      })
      .addCase(updateIsFavoriteFilmAction.fulfilled, (state, { payload }) => {
        state.updateIsFavoriteFilmStatus = LoadingStatus.SUCCEEDED;
        const index = state.films.findIndex((film) => film.id === payload.id);
        if (index !== -1) {
          state.films[index].isFavorite = payload.isFavorite;
        }

        if (index === state.promoFilm?.id) {
          state.promoFilm = payload;
        }
      })
      .addCase(updateIsFavoriteFilmAction.pending, (state) => {
        state.updateIsFavoriteFilmStatus = LoadingStatus.LOADING;
      })
      .addCase(updateIsFavoriteFilmAction.rejected, (state) => {
        state.updateIsFavoriteFilmStatus = LoadingStatus.FAILED;
      });
  },
});

export const { resetLoadDataStatus } = filmDataProcess.actions;

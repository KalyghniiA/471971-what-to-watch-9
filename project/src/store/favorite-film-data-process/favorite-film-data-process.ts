import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Film as FilmType } from '../../types/film';
import { APIRoute, LoadingStatus, NameSpase } from '../../const';
import { errorHandle } from '../../services/error-handle';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';

type FavoriteDataType = {
  id: number;
  isFavorite: number;
};

type InitialState = {
  favoriteFilms: FilmType[];
  favoriteFilmsStatus: LoadingStatus;
  updateIsFavoriteFilmStatus: LoadingStatus;
};

const initialState: InitialState = {
  favoriteFilms: [],
  favoriteFilmsStatus: LoadingStatus.Idle,
  updateIsFavoriteFilmStatus: LoadingStatus.Idle,
};

export const fetchFavoriteFilmsAction = createAsyncThunk<
  FilmType[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteFilms', async (_, { extra: api }) => {
  try {
    const { data } = await api.get<FilmType[]>(APIRoute.favorite());
    return data;
  } catch (err) {
    errorHandle(err);
    throw err;
  }
});

export const updateIsFavoriteFilmAction = createAsyncThunk<
  FilmType,
  FavoriteDataType,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/updateIsFavoriteFilm', async ({ id, isFavorite }, { extra: api }) => {
  try {
    const { data } = await api.post(APIRoute.changeStatusFilm(id, isFavorite));
    return data;
  } catch (err) {
    errorHandle(err);
    throw err;
  }
});

export const favoriteFilmDataProcess = createSlice({
  name: NameSpase.FavoriteFilmData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.favoriteFilmsStatus = LoadingStatus.Loading;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, { payload }) => {
        state.favoriteFilms = payload;
        state.favoriteFilmsStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchFavoriteFilmsAction.rejected, (state) => {
        state.favoriteFilmsStatus = LoadingStatus.Failed;
      })
      .addCase(updateIsFavoriteFilmAction.pending, (state) => {
        state.updateIsFavoriteFilmStatus = LoadingStatus.Loading;
      })
      .addCase(updateIsFavoriteFilmAction.fulfilled, (state) => {
        state.updateIsFavoriteFilmStatus = LoadingStatus.Succeeded;
      })
      .addCase(updateIsFavoriteFilmAction.rejected, (state) => {
        state.updateIsFavoriteFilmStatus = LoadingStatus.Failed;
      });
  },
});

const selectFavoriteFilmsState = (state: State) => state[NameSpase.FavoriteFilmData];

export const selectFavoriteFilms = (state: State) => selectFavoriteFilmsState(state).favoriteFilms;
export const selectFavoriteFilmsStatus = (state: State) => selectFavoriteFilmsState(state).favoriteFilmsStatus;

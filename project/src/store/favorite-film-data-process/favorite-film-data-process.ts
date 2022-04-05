import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Film as FilmType } from '../../types/film';
import { APIRoute, LoadingStatus, NameSpase } from '../../const';
import { errorHandle } from '../../services/error-handle';
import { AppDispatch, InitialStateFavoriteFilmDataProcess, State } from '../../types/state';
import { AxiosInstance } from 'axios';

type FavoriteDataType = {
  id: number;
  isFavorite: number;
};

const initialState: InitialStateFavoriteFilmDataProcess = {
  favoriteFilms: [],
  isFavoriteFilmsStatus: LoadingStatus.IDLE,
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
  name: NameSpase.favoriteFilmData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isFavoriteFilmsStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, { payload }) => {
        state.favoriteFilms = payload;
        state.isFavoriteFilmsStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchFavoriteFilmsAction.rejected, (state) => {
        state.isFavoriteFilmsStatus = LoadingStatus.FAILED;
      });
  },
});

/* .addCase(updateIsFavoriteFilm, (state, action) => {

  })
  .addCase(updateIsFavoritePromoFilm, (state, action) => {
    if (state.promoFilm !== null) {
      state.promoFilm.isFavorite = action.payload.isFavorite;
    }
  });*/

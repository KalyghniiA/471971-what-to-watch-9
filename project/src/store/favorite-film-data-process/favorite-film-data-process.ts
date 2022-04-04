import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Film as FilmType } from '../../types/film';
import { APIRoute, LoadingStatus, NameSpase } from '../../const';
import { errorHandle } from '../../services/error-handle';
import { AppDispatch, InitialStateFavoriteFilmDataProcess, State } from '../../types/state';
import { AxiosInstance } from 'axios';

const initialState: InitialStateFavoriteFilmDataProcess = {
  favoriteFilms: [],
  isFavoriteFilmsStatus: LoadingStatus.IDLE,
};

export const fetchFavoriteFilmsAction = createAsyncThunk<FilmType[], undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
  'data/fetchFavoriteFilms',
  async (_, { extra: api}) => {
  try {
    const { data } = await api.get<FilmType[]>(APIRoute.favorite());
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
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isFavoriteFilmsStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchFavoriteFilmsAction.rejected, (state) => {
        state.isFavoriteFilmsStatus = LoadingStatus.FAILED;
      });
  },
});

/*export const updateIsFavoriteFilmAction = createAsyncThunk(
  'data/updateIsFavoriteFilm',
  async ({ id, isFavorite }: isFavoriteData) => {
    const { authorizationStatus } = useAppSelector(({LOGIN}) => LOGIN);

    if (authorizationStatus !== AuthorizationStatus.Auth) {
      return errorHandle('No Login');
    }

    try {
      const { data } = await api.post(APIRoute.changeStatusFilm(id, isFavorite));

      store.dispatch(updateIsFavoriteFilm(data));
      /!*if ( promoFilm !== null && promoFilm.id === data.id) {

      }*!/
    } catch (err) {
      errorHandle(err);
    }
  },
);*/
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

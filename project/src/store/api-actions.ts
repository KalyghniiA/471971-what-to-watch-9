import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { Film as FilmType } from '../types/film';
import { APIRoute, AppRoute, AuthorizationStatus, LoadingStatus } from '../const';
import {
  changeCommentButtonStatus,
  loadFavoriteFilms,
  loadFilm,
  loadFilms,
  loadPromoFilm,
  loadReviews,
  loadSimilarFilms,
  redirectToRoute,
  requireAuthorization,
  updateCommentsData,
  updateIsFavoriteFilm
} from './action';
import { Review as ReviewType, ReviewData } from '../types/review';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { errorHandle } from '../services/error-handle';
import { dropAvatarUrl, saveAvatarUrl } from '../services/avatarUrl';
import { isFavoriteData } from '../types/is-favorite-data';
import { useAppSelector } from '../hooks';

export const fetchFilmsAction = createAsyncThunk('data/fetchFilms', async () => {
  try {
    const { data } = await api.get<FilmType[]>(APIRoute.films());
    store.dispatch(loadFilms(data));
  } catch (err) {
    errorHandle(err);
  }
});

export const fetchPromoFilmAction = createAsyncThunk('data/fetchPromoFilm', async () => {
  try {
    const { data } = await api.get<FilmType>(APIRoute.promo());
    store.dispatch(loadPromoFilm(data));
  } catch (err) {
    errorHandle(err);
  }
});

export const fetchFilmAction = createAsyncThunk('data/fetchFilm', async (id: number) => {
  try {
    const { data } = await api.get<FilmType>(APIRoute.film(id));
    store.dispatch(loadFilm(data));
  } catch (err) {
    store.dispatch(redirectToRoute('/404'));
    errorHandle(err);
  }
});

export const fetchSimilarFilmsAction = createAsyncThunk('data/fetchSimilarFilms', async (id: number) => {
  try {
    const { data } = await api.get<FilmType[]>(APIRoute.similarFilms(id));
    store.dispatch(loadSimilarFilms(data));
  } catch (err) {
    errorHandle(err);
  }
});

export const fetchFavoriteFilmsAction = createAsyncThunk('data/fetchFavoriteFilms', async () => {
  try {
    const { data } = await api.get<FilmType[]>(APIRoute.favorite());
    store.dispatch(loadFavoriteFilms(data));
  } catch (err) {
    errorHandle(err);
  }
});

export const fetchCommentsAction = createAsyncThunk('data/fetchComments', async (id: number) => {
  try {
    const { data } = await api.get<ReviewType[]>(APIRoute.comments(id));
    store.dispatch(loadReviews(data));
  } catch (err) {
    errorHandle(err);
  }
});

export const pushCommentAction = createAsyncThunk('data/pushComment', async ({ comment, rating, id }: ReviewData) => {
  store.dispatch(changeCommentButtonStatus(LoadingStatus.LOADING));
  try {
    const { data } = await api.post(APIRoute.comments(id), { comment, rating });
    store.dispatch(changeCommentButtonStatus(LoadingStatus.SUCCEEDED));
    store.dispatch(updateCommentsData(data));
    store.dispatch(redirectToRoute(`${AppRoute.Film}/${id}`));
  } catch (err) {
    errorHandle(err);
    store.dispatch(changeCommentButtonStatus(LoadingStatus.FAILED));
  }
});

export const updateIsFavoriteFilmAction = createAsyncThunk(
  'data/updateIsFavoriteFilm',
  async ({ id, isFavorite }: isFavoriteData) => {
    const { /*promoFilm,*/ authorizationStatus } = useAppSelector((state) => state);

    if (authorizationStatus !== AuthorizationStatus.Auth) {
      return errorHandle('No Login');
    }

    try {
      const { data } = await api.post(APIRoute.changeStatusFilm(id, isFavorite));

      store.dispatch(updateIsFavoriteFilm(data));
      /*if ( promoFilm !== null && promoFilm.id === data.id) {

      }*/
    } catch (err) {
      errorHandle(err);
    }
  },
);

export const loginAction = createAsyncThunk('user/login', async ({ login: email, password }: AuthData) => {
  try {
    const {
      data: { token, avatarUrl },
    } = await api.post<UserData>(APIRoute.login(), { email, password });
    saveToken(token);
    saveAvatarUrl(avatarUrl);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    store.dispatch(redirectToRoute(AppRoute.Root));
  } catch (err) {
    errorHandle(err);
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const logoutAction = createAsyncThunk('user/logout', async () => {
  try {
    await api.delete(APIRoute.logout());
    dropToken();
    dropAvatarUrl();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  } catch (err) {
    errorHandle(err);
  }
});

export const checkAuthorization = createAsyncThunk('user/CheckAuthorization', async () => {
  try {
    const {
      data: { token, avatarUrl },
    } = await api.get(APIRoute.login());
    saveToken(token);
    saveAvatarUrl(avatarUrl);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch (err) {
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    errorHandle(err);
  }
});
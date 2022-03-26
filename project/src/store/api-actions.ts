import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { Film as FilmType } from '../types/film';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import {
  loadFilm,
  loadFilms,
  loadPromoFilm,
  loadReviews,
  loadSimilarFilms,
  redirectToRoute,
  requireAuthorization
} from './action';
import { Review as ReviewType } from '../types/review';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { errorHandle } from '../services/error-handle';

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

export const fetchCommentsAction = createAsyncThunk('data/fetchComments', async (id: number) => {
  try {
    const { data } = await api.get<ReviewType[]>(APIRoute.comments(id));
    store.dispatch(loadReviews(data));
  } catch (err) {
    errorHandle(err);
  }
});

export const loginAction = createAsyncThunk('user/login', async ({ login: email, password }: AuthData) => {
  try {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.login(), { email, password });
    saveToken(token);
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
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  } catch (err) {
    errorHandle(err);
  }
});

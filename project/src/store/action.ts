import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, ViewLink } from '../const';
import { Film as FilmType } from '../types/film';
import { Review } from '../types/review';

export const selectGenre = createAction('main/selectionGenre', (genre: string) => ({ payload: genre }));

export const selectViewLink = createAction('selectionLink', (link: ViewLink) => ({ payload: link }));

export const increaseLimit = createAction('main/clickShowMore');

export const resetShownCards = createAction('main/resetShownCard');

export const loadingFilms = createAction('data/loadingFilms');

export const loadFilms = createAction<FilmType[]>('data/loadFilms');

export const errorLoadingFilms = createAction('data/errorLoadingFilms');

export const loadPromoFilm = createAction<FilmType>('data/loadPromo');

export const loadFilm = createAction<FilmType>('data/loadFilm');

export const loadSimilarFilms = createAction<FilmType[]>('data/loadSimilarFilms');

export const loadReviews = createAction<Review[]>('data/loadReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');

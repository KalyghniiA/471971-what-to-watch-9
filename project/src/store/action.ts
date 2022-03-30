import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, LoadingStatus, ViewLink } from '../const';
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

export const loadFavoriteFilms = createAction<FilmType[]>('data/loadFavoriteFilms');

export const loadReviews = createAction<Review[]>('data/loadReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<string>('game/redirectToRoute');

export const resetLoadDataStatus = createAction('data/resetLoadDataStatus');

export const changeCommentButtonStatus = createAction<LoadingStatus>('comment/changeCommentButtonStatus');

export const updateCommentsData = createAction<Review[]>('comment/updateComments');

export const updateIsFavoriteFilm = createAction<FilmType>('data/updateIsFavoriteFilm');

export const updateIsFavoritePromoFilm = createAction<FilmType>('data/updateIsFavoritePromoFilm');

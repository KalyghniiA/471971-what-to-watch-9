import { combineReducers } from '@reduxjs/toolkit';
import { NameSpase } from '../const';
import { filmDataProcess } from './film-data-process/film-data-process';
import { userProcess } from './user-process/user-process';
import { favoriteFilmDataProcess } from './favorite-film-data-process/favorite-film-data-process';
import { appProcess } from './app-process/app-process';
import { reviewDataProcess } from './review-data-process/review-data-process';

export const rootReducer = combineReducers({
  [NameSpase.App]: appProcess.reducer,
  [NameSpase.FilmData]: filmDataProcess.reducer,
  [NameSpase.FavoriteFilmData]: favoriteFilmDataProcess.reducer,
  [NameSpase.ReviewData]: reviewDataProcess.reducer,
  [NameSpase.Login]: userProcess.reducer,
});

import { combineReducers } from '@reduxjs/toolkit';
import { NameSpase } from '../const';
import { filmDataProcess } from './film-data-process/film-data-process';
import { userProcess } from './user-process/user-process';
import { favoriteFilmDataProcess } from './favorite-film-data-process/favorite-film-data-process';
import { appProcess } from './app-process/app-process';
import { reviewDataProcess } from './review-data-process/review-data-process';
import { videoProcess } from './video-process/video-process';

export const rootReducer = combineReducers({
  [NameSpase.app]: appProcess.reducer,
  [NameSpase.filmData]: filmDataProcess.reducer,
  [NameSpase.favoriteFilmData]: favoriteFilmDataProcess.reducer,
  [NameSpase.reviewData]: reviewDataProcess.reducer,
  [NameSpase.login]: userProcess.reducer,
  [NameSpase.video]: videoProcess.reducer,
});

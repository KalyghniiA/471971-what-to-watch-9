import { combineReducers } from '@reduxjs/toolkit';
import { NameSpase } from '../const';
import { filmDataProcess } from './film-data-process/film-data-process';
import { userProcess } from './user-process/user-process';
import { appProcess } from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpase.data]: filmDataProcess.reducer,
  [NameSpase.login]: userProcess.reducer,
  [NameSpase.app]: appProcess.reducer,
});

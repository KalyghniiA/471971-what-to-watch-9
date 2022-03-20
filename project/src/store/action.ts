import { createAction } from '@reduxjs/toolkit';
import { ViewLink } from '../const';

export const selectGenre = createAction('main/selectionGenre', (genre: string) => ({ payload: genre }));

export const selectViewLink = createAction('selectionLink', (link: ViewLink) => ({ payload: link }));

export const increaseLimit = createAction('main/clickShowMore');

export const resetShownCards = createAction('main/resetShownCard');

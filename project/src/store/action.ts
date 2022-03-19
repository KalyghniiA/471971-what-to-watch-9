import { createAction } from '@reduxjs/toolkit';
import { ViewLink } from '../const';

export const selectionGenre = createAction('main/selectionGenre', (genre: string) => {
  return {
    payload: genre,
  };
});

export const selectionViewLink = createAction('selectionLink', (link: ViewLink) => {
  return {
    payload: link,
  };
});

export const clickShowMore = createAction('main/clickShowMore');

export const resetShownCard = createAction('main/resetShownCard');

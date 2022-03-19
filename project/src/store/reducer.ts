import { createReducer } from '@reduxjs/toolkit';
import { genres, QuantityCards, StepShowCard, ViewLink } from '../const';
import { clickShowMore, resetShownCard, selectionGenre, selectionViewLink } from './action';
import { mockFilms } from '../mocks/films';
import { mockReviews } from '../mocks/reviews';

const initialState = {
  activeGenre: genres['All Genres'],
  films: mockFilms,
  reviews: mockReviews,
  activeLink: ViewLink.Main,
  quantityShownCards: QuantityCards.Main,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectionGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(selectionViewLink, (state, action) => {
      state.activeLink = action.payload;
    })
    .addCase(clickShowMore, (state) => {
      state.quantityShownCards += StepShowCard;
    })
    .addCase(resetShownCard, (state) => {
      state.quantityShownCards = QuantityCards.Main;
    });
});

export { reducer };

import { createReducer } from '@reduxjs/toolkit';
import { genres, QuantityCards, STEP_SHOW_CARD, ViewLink } from '../const';
import { increaseLimit, resetShownCards, selectGenre, selectViewLink } from './action';
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
    .addCase(selectGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(selectViewLink, (state, action) => {
      state.activeLink = action.payload;
    })
    .addCase(increaseLimit, (state) => {
      state.quantityShownCards += STEP_SHOW_CARD;
    })
    .addCase(resetShownCards, (state) => {
      state.quantityShownCards = QuantityCards.Main;
    });
});

export { reducer };

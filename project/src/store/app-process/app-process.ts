import { genres, NameSpase, QuantityCards, STEP_SHOW_CARD, ViewLink } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { InitialStateAppProcess } from '../../types/state';

const initialState: InitialStateAppProcess = {
  activeGenre: genres['All Genres'],
  activeLink: ViewLink.Main,
  quantityShownCards: QuantityCards.Main,
};

export const appProcess = createSlice({
  name: NameSpase.app,
  initialState,
  reducers: {
    selectGenre: (state, action) => {
      state.activeGenre = action.payload;
    },
    selectViewLink: (state, action) => {
      state.activeLink = action.payload;
    },
    increaseLimit: (state) => {
      state.quantityShownCards += STEP_SHOW_CARD;
    },
    resetShownCards: (state) => {
      state.quantityShownCards = QuantityCards.Main;
    },
  },
});

export const { selectGenre, selectViewLink, increaseLimit, resetShownCards } = appProcess.actions;

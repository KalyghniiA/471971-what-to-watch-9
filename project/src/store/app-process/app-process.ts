import { genres, NameSpase, QuantityCards, STEP_SHOW_CARD, ViewLink } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { State } from '../../types/state';

type InitialState = {
  activeGenre: string;
  activeLink: ViewLink;
  quantityShownCards: QuantityCards;
};

const initialState: InitialState = {
  activeGenre: genres['All Genres'],
  activeLink: ViewLink.Main,
  quantityShownCards: QuantityCards.Main,
};

export const appProcess = createSlice({
  name: NameSpase.App,
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

const selectAppState = (state: State) => state[NameSpase.App];

export const selectStateActiveGenre = (state: State) => selectAppState(state).activeGenre;
export const selectStateActiveLink = (state: State) => selectAppState(state).activeLink;
export const selectStateQuantityShownCards = (state: State) => selectAppState(state).quantityShownCards;

export const { selectGenre, selectViewLink, increaseLimit, resetShownCards } = appProcess.actions;

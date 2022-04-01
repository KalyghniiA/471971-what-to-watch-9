import { AuthorizationStatus, NameSpase } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { InitialStateUserProcess } from '../../types/state';

const initialState: InitialStateUserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpase.login,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { requireAuthorization } = userProcess.actions;

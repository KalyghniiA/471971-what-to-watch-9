import { APIRoute, AppRoute, AuthorizationStatus, NameSpase, ViewLink } from '../../const';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, InitialStateUserProcess, State } from '../../types/state';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { dropToken, saveToken } from '../../services/token';
import { dropAvatarUrl, saveAvatarUrl } from '../../services/avatarUrl';
import { selectViewLink } from '../app-process/app-process';
import { redirectToRoute } from '../action';
import { errorHandle } from '../../services/error-handle';
import { AxiosInstance } from 'axios';

const initialState: InitialStateUserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ login: email, password }, { dispatch, extra: api }) => {
  try {
    const {
      data: { token, avatarUrl },
    } = await api.post<UserData>(APIRoute.login(), { email, password });
    saveToken(token);
    saveAvatarUrl(avatarUrl);
    dispatch(selectViewLink(ViewLink.Main));
    dispatch(redirectToRoute(AppRoute.Root));
  } catch (err) {
    errorHandle(err);
    throw err;
  }
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_, { dispatch, extra: api }) => {
  try {
    await api.delete(APIRoute.logout());
    dropToken();
    dropAvatarUrl();
    dispatch(redirectToRoute(AppRoute.Root));
  } catch (err) {
    errorHandle(err);
    throw err;
  }
});

export const checkAuthorization = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/CheckAuthorization', async (_, { extra: api }) => {
  try {
    const {
      data: { token, avatarUrl },
    } = await api.get(APIRoute.login());
    saveToken(token);
    saveAvatarUrl(avatarUrl);
  } catch (err) {
    errorHandle(err);
    throw err;
  }
});

export const userProcess = createSlice({
  name: NameSpase.login,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuthorization.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthorization.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

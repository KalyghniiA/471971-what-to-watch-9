import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Review as ReviewType, ReviewData } from '../../types/review';
import { APIRoute, AppRoute, LoadingStatus, NameSpase } from '../../const';
import { errorHandle } from '../../services/error-handle';
import { redirectToRoute } from '../action';
import { AppDispatch, InitialStateReviewDataProcess, State } from '../../types/state';
import { AxiosInstance } from 'axios';

const initialState: InitialStateReviewDataProcess = {
  reviews: [],
  isReviewsStatus: LoadingStatus.IDLE,
  isPostingCommentStatus: LoadingStatus.IDLE,
};

export const fetchCommentsAction = createAsyncThunk<
  ReviewType[],
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchComments', async (id, { extra: api }) => {
  try {
    const { data } = await api.get<ReviewType[]>(APIRoute.comments(id));
    return data;
  } catch (err) {
    errorHandle(err);
    throw err;
  }
});

export const postCommentAction = createAsyncThunk<
  ReviewType[],
  ReviewData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/pushComment', async ({ comment, rating, id }, { dispatch, extra: api }) => {
  try {
    const { data } = await api.post(APIRoute.comments(id), { comment, rating });
    dispatch(redirectToRoute(`${AppRoute.Film}/${id}`));
    return data;
  } catch (err) {
    errorHandle(err);
    throw err;
  }
});

export const reviewDataProcess = createSlice({
  name: NameSpase.reviewData,
  initialState,
  reducers: {
    resetLoadReviewStatus: (state) => {
      state.reviews = [];
      state.isReviewsStatus = LoadingStatus.IDLE;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isReviewsStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, { payload }) => {
        state.reviews = payload;
        state.isReviewsStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isReviewsStatus = LoadingStatus.FAILED;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isPostingCommentStatus = LoadingStatus.LOADING;
      })
      .addCase(postCommentAction.fulfilled, (state, { payload }) => {
        state.reviews = payload;
        state.isPostingCommentStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.isPostingCommentStatus = LoadingStatus.FAILED;
      });
  },
});

export const { resetLoadReviewStatus } = reviewDataProcess.actions;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Review as ReviewType, ReviewData } from '../../types/review';
import { APIRoute, AppRoute, LoadingStatus, NameSpase } from '../../const';
import { errorHandle } from '../../services/error-handle';
import { redirectToRoute } from '../action';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';

type InitialState = {
  reviews: ReviewType[];
  reviewsStatus: LoadingStatus;
  postingCommentStatus: LoadingStatus;
};

const initialState: InitialState = {
  reviews: [],
  reviewsStatus: LoadingStatus.Idle,
  postingCommentStatus: LoadingStatus.Idle,
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
  name: NameSpase.ReviewData,
  initialState,
  reducers: {
    resetLoadReviewStatus: (state) => {
      state.reviews = [];
      state.reviewsStatus = LoadingStatus.Idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.reviewsStatus = LoadingStatus.Loading;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, { payload }) => {
        state.reviews = payload;
        state.reviewsStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.reviewsStatus = LoadingStatus.Failed;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.postingCommentStatus = LoadingStatus.Loading;
      })
      .addCase(postCommentAction.fulfilled, (state, { payload }) => {
        state.reviews = payload;
        state.postingCommentStatus = LoadingStatus.Succeeded;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.postingCommentStatus = LoadingStatus.Failed;
      });
  },
});

const selectReviewsState = (state: State) => state[NameSpase.ReviewData];

export const selectReview = (state: State) => selectReviewsState(state).reviews;
export const selectReviewStatus = (state: State) => selectReviewsState(state).reviewsStatus;
export const selectPostingReviewStatus = (state: State) => selectReviewsState(state).postingCommentStatus;

export const { resetLoadReviewStatus } = reviewDataProcess.actions;

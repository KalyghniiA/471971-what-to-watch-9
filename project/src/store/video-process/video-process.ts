import { NameSpase, VideoPlaying } from '../../const';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  videoPlayingStatus: VideoPlaying;
};

const initialState: InitialState = {
  videoPlayingStatus: VideoPlaying.Pause,
};

export const videoProcess = createSlice({
  name: NameSpase.video,
  initialState,
  reducers: {
    selectPlayingVideo: (state, { payload }) => {
      state.videoPlayingStatus = payload;
    },
  },
});

export const { selectPlayingVideo } = videoProcess.actions;

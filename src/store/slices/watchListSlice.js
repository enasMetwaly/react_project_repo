// watchListSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchList: [], // An array to hold the movies in the watch list
};

const watchListSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    removeFromWatchList: (state, action) => {
      const movieIdToRemove = action.payload;
      state.watchList = state.watchList.filter((movie) => movie.id !== movieIdToRemove);
    },

    addToWatchList: (state, action) => {
      const newMovie = action.payload;
      const isMovieInList = state.watchList.some((movie) => movie.id === newMovie.id);

      if (!isMovieInList) {
        state.watchList.push({ ...newMovie });
      } else {
        // If the movie is already in the watch list, remove it.
        state.watchList = state.watchList.filter((movie) => movie.id !== newMovie.id);
      }
    },
  },
});

export const { removeFromWatchList, addToWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;

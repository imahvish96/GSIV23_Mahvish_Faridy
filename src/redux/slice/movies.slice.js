import { createSlice } from "@reduxjs/toolkit";
import { getLatestMovies, searchMovies } from '../thunk' 

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    latestMovies: {},
    searchMovie: {},
  },
  reducers: {
    resetSearchMovie(state) {
      state.searchMovie = {};
    },
  },
  extraReducers: {
    [getLatestMovies.fulfilled](state, { payload }) {
        state.latestMovies = payload;
    },
    [searchMovies.fulfilled](state, { payload }) {
      state.searchMovie = payload;
  },
  }
});

// this is for dispatch
export const { resetSearchMovie } = movieSlice.actions;

// this is for configureStore
export default movieSlice.reducer;

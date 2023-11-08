import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    nowPlayingMovies: null,
    trendingMovieClip: null,
    popularMovies: null,
    allCategoryMovies: {},
  },
  reducers: {
    addAllCategoryMovies: (state, action) => {
      state.allCategoryMovies[action.payload.name] = action.payload.value;
    },
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingClip: (state, action) => {
      state.trendingMovieClip = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});
export const {
  addnowPlayingMovies,
  addTrendingClip,
  addPopularMovies,
  addAllCategoryMovies,
} = movieSlice.actions;
export default movieSlice.reducer;

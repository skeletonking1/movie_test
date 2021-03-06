import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

require('dotenv').config();

const initialState = {
  movies: [],
  movieDetails: null,
  error: null,
  loading: false,
};

const slice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesData(state, action) {
      const { payload } = action;
      state.movies = payload;
    },
    fetchMovieDetail(state, action) {
      const { payload } = action;
      state.movieDetails = payload;
    },
    createError(state, action) {
      state.error = action.payload;
    },
    loading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const { fetchMoviesData, fetchMovieDetail, createError, loading } = slice.actions;
export const fetchMovies = (searchText) => async (dispatch) => {
  try {
    dispatch(slice.actions.loading(true));
    dispatch(slice.actions.fetchMoviesData([]));
    const response = await Axios.get(
      `http://www.omdbapi.com/?s=${searchText}&apikey=${process.env.REACT_APP_API_KEY}&plot=full`
    );
    if (response.status === 200) {
      if (response.data.Search) {
        dispatch(slice.actions.fetchMoviesData(response.data.Search));
      } else {
        dispatch(slice.actions.createError(response.data.Error));
      }
      dispatch(slice.actions.loading(false));
    }
  } catch (err) {
    return err.message;
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  try {
    dispatch(slice.actions.fetchMovieDetail(null));
    const response = await Axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}&plot=full`
    );
    if (response.status === 200) {
      if (response.data.Error) {
        dispatch(slice.actions.createError(response.data.Error));
      } else {
        dispatch(slice.actions.fetchMovieDetail(response.data));
      }
    }
  } catch (err) {
    return err.message;
  }
};

import {reducer, fetchMoviesData, fetchMovieDetail, createError, loading } from './movies.js'
import Axios from 'axios';

const previousState = {
    movies: [],
    movieDetails: null,
    error: null,
    loading: false,
}

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
        movies: [],
        movieDetails: null,
        error: null,
        loading: false,
    }
  )
})

test('should add movies, movies detail state',async () => {
    const previousState = {
        movies: [],
        movieDetails: null,
        error: null,
        loading: false,
    }
    const response = await Axios.get(
      `http://www.omdbapi.com/?s=jerry&apikey=46b69003&plot=full`
    );
    const movies_data = response.data.Search;
    expect(reducer(previousState, fetchMoviesData( movies_data ))).toEqual({
        movies: movies_data,
        movieDetails: null,
        error: null,
        loading: false,
    })

    expect(reducer(previousState, fetchMovieDetail(movies_data[0]))).toEqual({
        movies: [],
        movieDetails: movies_data[0],
        error: null,
        loading:false
    })
})

test('should add loading state',async () => {
    
    expect(reducer(previousState, loading(true))).toEqual({
        movies: [],
        movieDetails: null,
        error: null,
        loading: true,
    })

})
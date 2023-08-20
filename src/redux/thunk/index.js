import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../services/httpClient';
import * as Url from '../../constant';

// https://api.themoviedb.org/3/search/movie?api_key=5eb42a865b1c7381beba1da2f29cbd1b&query=spiderman
export const getLatestMovies = createAsyncThunk(
	'movies/getLatestMovies',
	async (page) => {
		const getMoviesResponse = await httpClient.get(`${Url.baseUrl}movie/upcoming?language=en-US&page=${page}&${Url.apiKey}`);
		return getMoviesResponse;
	}
);
export const getMoviesById = createAsyncThunk(
	'movies/getMoviesById',
	async (id) => {
		const getMovieById = await httpClient.get(`${Url.baseUrl}/movie/${id}?append_to_response=credits&language=en-US?${Url.apiKey}`);
		return getMovieById;
	}
);

export const searchMovies = createAsyncThunk(
	'movies/searchMovies',
	async (query) => {
		const moviesResponse = await httpClient.get(`${Url.baseUrl}/search/movie?${Url.apiKey}&query=${query}`);
		return moviesResponse;
	}
);
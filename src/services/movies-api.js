import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '0ec59de6c34a89161ac01d0312b43ce4';

export const fetchCast = movieId => {
	return axios
		.get(`/movie/${movieId}/credits?api_key=${KEY}`)
		.then(res => res.data.cast);
};

export const fetchReviews = movieId => {
	return axios
		.get(`/movie/${movieId}/reviews?api_key=${KEY}`)
		.then(res => res.data.results);
};

export const fetchTrading = () => {
	return axios
		.get(`/trending/movie/day?api_key=${KEY}`)
		.then(res => res.data.results);
};

export const fetchMovieDetails = movieId => {
	return axios.get(`/movie/${movieId}?api_key=${KEY}`).then(res => res.data);
};

export const searchMovies = query => {
	return axios
		.get(`/search/movie?query=${query}&page=1&api_key=${KEY}`)
		.then(res => res.data.results);
};

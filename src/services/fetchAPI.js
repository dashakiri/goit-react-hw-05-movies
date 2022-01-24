const axios = require('axios');

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '20c42f66e47aebd060bdb76cf1431c4e';

export default async function fetchAPI(url = '', config = {}) {
  try {
    const { data } = await axios(url, config);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function fetchTrendingMovies() {
  return fetchAPI(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=1`);
}

export function fetchOneMovie(movieId) {
  return fetchAPI(`${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchMovieCredits(movieId) {
  return fetchAPI(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieReviews(movieId) {
  return fetchAPI(
    `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}

export function fetchMoviesByQuery(searchQuery) {
  return fetchAPI(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`,
  );
}

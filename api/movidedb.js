import axios from 'axios'
import { apiKey } from '../constants'

// endpoints
const apiBaseUrl = "https://api.themoviedb.org/3";
const trendinMoviesEndPoint = `${apiBaseUrl}/trending/all/day?api_key=${apiKey}`;
const upComingMoviesEndPoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndPoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const searchMovieEndPoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;


export const image500 = (path) => path ? `https://image.tmdb.org/t/p/w500${path}` : null
export const image342 = (path) => path ? `https://image.tmdb.org/t/p/w342${path}` : null
export const image185 = (path) => path ? `https://image.tmdb.org/t/p/w185${path}` : null

export const movieDetailEndPoint = id => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`
export const movieCreditsEndPoint = id => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`
export const similarMoviesEndPoint = id => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`


export const movieActress = id => `${apiBaseUrl}/person/${id}?api_key=${apiKey}`
export const movieActresCredits = id => `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`



export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';


const apiCall = async (endpoint, params) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {}
  }

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return {}
  }
}

export const fetchTrendingMovies = () => {
  return apiCall(trendinMoviesEndPoint);
}

export const fetchUpComingMovies = () => {
  return apiCall(upComingMoviesEndPoint);
}

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndPoint);
}

export const fetchMovieDetail = (id) => {
  return apiCall(movieDetailEndPoint(id))
}

export const fetchMovieCredits = (id) => {
  return apiCall(movieCreditsEndPoint(id))
}

export const fetchMoviesSimilar = (id) => {
  return apiCall(similarMoviesEndPoint(id))
}

export const fetchMovieStar = (id) => {
  return apiCall(movieActress(id));
}

export const fetchMovieStarCredit = (id) => {
  return apiCall(movieActresCredits(id));
}

export const fetchSearchMovie = (params) => {
  return apiCall(searchMovieEndPoint, params);
}
import axios from 'axios';
import noPhoto from './components/images/incognito-mode.jpg';
import noPoster from './components/images/movie.jpg';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'b6220ba3d0f86ae786d5e317fe9a944e',
  include_adult: false,
};

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchTrending = async () => {
  return axios
    .get(`/trending/all/day?`)
    .then(({ data: { results } }) =>
      results.map(({ id, title, poster_path: poster }) => ({
        id,
        title: title ? title : 'No Name',
        poster: poster ? IMG_URL + poster : noPoster,
      }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

export const fetchByQuery = async query => {
  return axios
    .get(`/search/movie?query=${query}`)
    .then(({ data: { results } }) => {
      results.map(({ id, title, poster_path: poster }) => ({
        id,
        title,
        poster: poster ? IMG_URL + poster : noPoster,
      }));
    })
    .catch(error => {
      console.log(error.message);
    });
};

export const fetchMovieDetails = movieId => {
  return axios
    .get(`/movie/${movieId}?`)
    .then(
      ({
        data: {
          id,
          poster_path: poster,
          title,
          release_date: releaseYear,
          vote_average: userScore,
          overview,
          genres,
        },
      }) => ({
        id,
        poster: poster ? IMG_URL + poster : noPoster,
        title,
        releaseYear: new Date(releaseYear).getFullYear(),
        userScore: Math.round(userScore * 10),
        overview,
        genres,
      })
    )
    .catch(error => {
      console.log(error.message);
    });
};

export const fetchMovieCredits = movieId => {
  return axios
    .get(`/movie/${movieId}/credits?`)
    .then(({ data: { cast } }) =>
      cast.map(({ id, name, character, profile_path: photo }) => ({
        id,
        name,
        character,
        photo: photo ? IMG_URL + photo : noPhoto,
      }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

export const fetchMovieReviews = movieId => {
  return axios
    .get(`/movie/${movieId}/reviews?`)
    .then(({ data: { results } }) =>
      results.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

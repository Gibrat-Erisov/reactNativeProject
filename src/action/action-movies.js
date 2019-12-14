import { movies } from "../API/movies";

const setMovies = allMovies => ({ type: "SET_MOVIES", allMovies });

export const getMovies = () => {
  return dispatch => {
    movies.getMovies().then(allMovies => {
      dispatch(setMovies(allMovies));
    });
  };
};

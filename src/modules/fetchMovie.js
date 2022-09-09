import createMovieList from './createMovieList.js';
import createPopup from './createPopup.js';
import getMovie from './getMovie.js';

const fetchMovie = () => {
  for (let i = 1; i < 10; i += 1) {
    const movie = getMovie(i);
    createMovieList(movie);
    createPopup(movie);
  }
};

export default fetchMovie;
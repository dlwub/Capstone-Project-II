import createMovieList from './createMovieList.js';
import createPopup from './createPopup.js';
import getMovie from './getMovie.js';

const fetchMovie = () => {
  for (let i = 1; i < 10; i += 1) {
    (async () => {
      const movie = await getMovie(i);
      createMovieList(movie);
      createPopup(movie);
    })();
  }
};

export default fetchMovie;
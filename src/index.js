import './index.css';

const display = document.querySelector('.movie-api');
const fetchmovie = async () => {
  for (let i = 1; i < 10; i += 1) {
    await getMovie(i);
  }
};
const getMovie = async (id) => {
  const urlHistory = `https://api.tvmaze.com/shows/${id}`;
  const res = await fetch(urlHistory);
  const movie = await res.json();
  createMovielist(movie);
};
fetchmovie();
function createMovielist(movie) {
  const movieEl = document.createElement('div');
  movieEl.classList.add('movie');
  const movies = `
  <div class="movieli">
  <h2 class="name">${movie.name}</h2>
  <img src="${movie.image.medium}" alt="img">
  <button type="button" class="comments-btn1">Comments</button></div>
  </div>
  `;
  movieEl.innerHTML = movies;
  display.appendChild(movieEl);
}

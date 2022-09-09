import createElt from './createElement.js';
import displayPopup from './displayPopup.js';
import postLikes from './postLikes.js';

const display = document.querySelector('.movie-api');

const createMovieList = (movie) => {
  const movieEl = createElt('div', 'movie', '');
  const movies = `
  <div class="movieli">
  <h2 class="name">${movie.name}</h2>
  console.log("${movie}")
  <img src="${movie.image.medium}" alt="img" class="img">
  <button type="button" class="likes-btn" id="like-btn-${movie.id}"> <span class="likeI"><i class="fa-regular fa-heart"></i></span>
  <span class="count">0</span></button>
  <button type="button" id="comment-btn-${movie.id}" class="comments-btn">Comments</button></div>
  </div>
  `;

  movieEl.innerHTML = movies;
  display.appendChild(movieEl);

  const commentBtn = document.getElementById(`comment-btn-${movie.id}`);
  commentBtn.addEventListener('click', (e) => {
    const id = e.target.id.replace('comment-btn-', '');
    e.preventDefault();
    displayPopup(id);
  });

  const likeBtn = document.getElementById(`like-btn-${movie.id}`);
  likeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    postLikes(e);
  });
};

export default createMovieList;
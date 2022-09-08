import './index.css';
import logo from './img/logo.png';

const display = document.querySelector('.movie-api');
const getMovie = async (id) => {
  const urlHistory = `https://api.tvmaze.com/shows/${id}`;
  const res = await fetch(urlHistory);
  const movie = await res.json();
  createMovielist(movie);
};

function createMovielist(movie) {
  const movieEl = document.createElement('div');
  movieEl.classList.add('movie');
  const movies = `
  <div class="movieli">
  <h2 class="name">${movie.name}</h2>
  <img src="${movie.image.medium}" alt="img" class="img">
  <button type="button" class="likes-btn" id="${movie.id}"> <span class="likeI"><i class="fa-regular fa-heart"></i></span>
  <span class="count">0</span></button>
  <button type="button" class="comments-btn1">Comments</button>
  </div>
  `;
  movieEl.innerHTML = movies;
  display.appendChild(movieEl);
}

const fetchmovie = async () => {
  for (let i = 1; i < 10; i += 1) {
    getMovie(i);
  }
};
fetchmovie();
const image = document.createElement('img');
image.src = logo;
document.querySelector('nav').prepend(image);

const likeUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dRWqh227u7lkZF9bzt9m/likes/';

const movieLi = document.querySelector('.movieli');
export const postData = async (post) => {
  await fetch(likeUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(post),
  });
};

let clicksNum = 0;
// window.addEventListener('click', (e) => {
//   if (e.target.classList.contains('likes-btn')) {
//     console.log('hi');
//     postLike(e.target.id);
//     e.target.children[0].innerHTML = `<i class="fa-solid fa-heart" style="color:red"></i>`;
//     clicksNum += 1;
//     console.log(e.target.children[1]);
//     e.target.children[1].innerHTML = clicksNum;
//   }
// });
const getLike = async () => {
  const urlLikes =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dRWqh227u7lkZF9bzt9m/likes/';
  const rest = await fetch(urlLikes);
  const likes = await rest.json();
  const btn = document.querySelectorAll('.likes-btn');

  btn.forEach((btn) => {
    likes.forEach((like) => {
      if (like.item_id == btn.id) {
        btn.children[1].innerHTML = like.likes;
      }
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('likes-btn')) {
      console.log('hi');
      postLike(e.target.id);
      e.target.children[0].innerHTML = `<i class="fa-solid fa-heart" style="color:red"></i>`;
      likes.forEach((like) => {
        if (like.item_id == e.target.id) {
          e.target.children[1].innerHTML = like.likes;
        }
      });
    }
  });
};

const postLike = async (id) => {
  const urlLikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dRWqh227u7lkZF9bzt9m/likes/`;
  const data = {
    item_id: `${id}`,
  };
  console.log(id);
  await fetch(urlLikes, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  getLike();
};

window.addEventListener('DOMContentLoaded', getLike);

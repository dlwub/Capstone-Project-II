import './index.css';
import fetchMovie from './modules/fetchMovie.js';
import getLikes from './modules/getLikes.js';
import logo from './images/logo.png';

const image = document.createElement('img');
image.src = logo;
document.querySelector('nav').prepend(image);

window.addEventListener('load', () => {
  fetchMovie();
  getLikes();  
});

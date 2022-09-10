import createElt from './createElement.js';
import createImage from './createImage.js';
import btn from '../images/close_btn.png';
import getSummary from './getSummary.js';

const createPopup = (movie) => {
  const popUp = createElt('div', 'popup', '');
  const { id } = movie;
  popUp.setAttribute('id', `popup-${id}`);

  const imgBtnContainer = createElt('div', 'img-btn-container', '');
  const img = createImage('movie-poster', movie.image.medium, 'Movie poster');

  const closeBtn = new Image();
  closeBtn.src = btn;
  closeBtn.classList.add('close-btn');
  closeBtn.setAttribute('id', id);

  imgBtnContainer.append(img);
  imgBtnContainer.append(closeBtn);

  popUp.append(imgBtnContainer);
  const movieName = createElt('h2', 'movie-name', movie.name);
  popUp.append(movieName);

  const descriptionContainer = createElt('div', 'description-container', '');
  const genreLanguage = createElt('div', 'genre-language', '');
  const genre = createElt('p', 'genre', `Genre: ${movie.genres}`);
  const language = createElt('p', 'language', `Language: ${movie.language}`);
  genreLanguage.appendChild(genre);
  genreLanguage.appendChild(language);
  descriptionContainer.appendChild(genreLanguage);

  const rating = createElt('p', 'rating', `Rating: ${movie.rating.average}`);
  popUp.append(descriptionContainer);
  popUp.append(rating);

  const cleanedSummary = getSummary(movie.summary);
  const summary = createElt('p', 'summary', `Summary: ${cleanedSummary}`);
  popUp.append(summary);

  const comments = createElt('h3', 'comments', 'Comments()');
  comments.setAttribute('id', `comments${id}`);
  popUp.append(comments);

  const addComment = createElt('h3', 'comments', 'Add a comment');
  popUp.append(addComment);

  const formDiv = createElt('form', 'comment-form', '');
  formDiv.method = 'POST';
  const nameInput = createElt('input', 'name-input', '');
  nameInput.type = 'text';
  nameInput.placeholder = 'Your name';
  nameInput.setAttribute('id', `name-input${id}`);
  formDiv.appendChild(nameInput);

  const commentInput = createElt('textarea', 'comment-input', '');
  commentInput.placeholder = 'Your insights';
  commentInput.setAttribute('id', `comment-input${id}`);
  formDiv.appendChild(commentInput);

  const submitButton = createElt('button', 'submit-btn', 'Comment');
  submitButton.type = 'submit';
  submitButton.setAttribute('id', `submit-btn${id}`);
  formDiv.appendChild(submitButton);

  popUp.appendChild(formDiv);
  popUp.style.display = 'none';
  document.body.insertBefore(popUp, document.body.firstChild);
};

export default createPopup;
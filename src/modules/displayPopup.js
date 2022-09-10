import Comment from './comment.js';
import fromAPI from './fromAPI.js';
import getUrl from './getUrl.js';
import hidePopup from './hidePopup.js';
import toAPI from './toAPI.js';
import updateComment from './updateComment.js';

const container = document.querySelector('.container');
const navB = document.querySelector('.nav');
const footer = document.querySelector('.footer');

const displayPopup = (i) => {
  const popUp = document.getElementById(`popup-${i}`);
  const closeBtn = document.getElementById(`${i}`);
  const submitButton = document.getElementById(`submit-btn${i}`);

  const url = `${getUrl()}/comments?item_id=movie${i}`;
  const commentList = document.getElementById(`comments${i}`);
  (async () => {
    const comments = await fromAPI(url);
    commentList.innerHTML = `Comments (
      <span id="comment-count${i}">${comments.length ? comments.length : 0}</span>)`;
    comments.forEach((comment) => {
      commentList.innerHTML += `<li class="comment-list">${comment.creation_date} ${comment.username}: ${comment.comment}</li>`;
    });
  })();
  popUp.style.display = 'block';
  container.style.display = 'none';
  navB.style.display = 'none';
  footer.style.display = 'none';
  window.scrollTo(0, 0);
  closeBtn.addEventListener('click', (e) => hidePopup(e));
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.id.replace('submit-btn', '');
    const name = document.getElementById(`name-input${id}`).value;
    const comment = document.getElementById(`comment-input${id}`).value;
    const itemId = `movie${id}`;
    const url = `${getUrl()}/comments`;
    if (name && comment) {
      const newComment = new Comment(itemId, name, comment);
      toAPI(url, newComment);
      updateComment(id, name, comment);
    }

    document.getElementById(`name-input${id}`).value = '';
    document.getElementById(`comment-input${id}`).value = '';
  });
};

export default displayPopup;

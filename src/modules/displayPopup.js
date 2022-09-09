import fromAPI from './fromAPI.js';
import getUrl from './getUrl.js';

const container = document.querySelector('.container');

const displayPopup = (i) => {
  const url = `${getUrl()}/comments?item_id=movie${i}`;
  const popUp = document.getElementById(`popup-${i}`);
  const commentList = document.getElementById(`comments${i}`);
  (async () => {
    const comments = await fromAPI(url);
    commentList.innerHTML = `Comments(${comments.length ? comments.length : 0})`;
    comments.forEach((comment) => {
      commentList.innerHTML += `<li class="comment-list">${comment.creation_date} ${comment.username}: ${comment.comment}</li>`;
    });
  })();
  popUp.style.display = 'block';
  container.style.display = 'none';
  window.scrollTo(0, 0);
};

export default displayPopup;
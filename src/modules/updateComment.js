import commentCount from './commentCount.js';

const updateComment = (id, name, comment) => {
  const commentList = document.getElementById(`comments${id}`);
  const countDisplay = document.getElementById(`comment-count${id}`);
  countDisplay.innerHTML = parseInt(commentCount(id), 10) + 1;
  commentList.innerHTML += `<li class="comment-list">${new Date().toISOString().slice(0, 10)} ${name}: ${comment}</li>`;
};

export default updateComment;
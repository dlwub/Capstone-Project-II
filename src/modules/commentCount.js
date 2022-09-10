const commentCount = (id) => {
  return document.getElementById(`comment-count${id}`).innerHTML;
} 

export default commentCount;
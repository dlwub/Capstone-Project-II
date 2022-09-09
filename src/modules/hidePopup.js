const container = document.querySelector('.container');

const hidePopup = (e) => {
  const popUp = document.getElementById(`popup-${e.target.id}`);
  container.style.display = 'block';
  popUp.style.display = 'none';
};

export default hidePopup;
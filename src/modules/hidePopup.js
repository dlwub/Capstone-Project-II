const container = document.querySelector('.container');
const navB = document.querySelector('.nav');
const hidePopup = (e) => {
  const popUp = document.getElementById(`popup-${e.target.id}`);
  container.style.display = 'block';
  popUp.style.display = 'none';
  navB.style.display = 'block';
};

export default hidePopup;

const createImage = (className, src, alt) => {
  const img1 = document.createElement('img');
  img1.className = className;
  img1.src = src;
  img1.alt = alt;
  return img1;
};

export default createImage;
const createElt = (elt, className, textContent) => {
  const elt1 = document.createElement(elt);
  elt1.className = className;
  elt1.textContent = textContent;
  return elt1;
};

export default createElt;
import getUrl from './getUrl.js';
import toAPI from './toAPI.js';

const postLikes = (e) => {
  if (e.target.classList.contains('likes-btn')) {
    const url = `${getUrl()}/likes`;
    const data = {
      item_id: `movie${e.target.id.replace('like-btn-', '')}`,
    };
    toAPI(url, data);
<<<<<<< HEAD
    e.target.children[0].innerHTML =
      '<i class="fa-solid fa-heart" style="color:red"></i>';
    e.target.children[1].innerHTML =
      parseInt(e.target.children[1].innerHTML, 10) + 1;
=======
    e.target.children[0].innerHTML = '<i class="fa-solid fa-heart" style="color:red"></i>';
    e.target.children[1].innerHTML = parseInt(e.target.children[1].innerHTML, 10) + 1;
>>>>>>> 4d467adf3ec4cad66bc90d8b605508037370f9f7
  }
};

export default postLikes;

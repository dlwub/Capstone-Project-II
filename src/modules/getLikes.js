import fromAPI from './fromAPI.js';
import getUrl from './getUrl.js';

const getLikes = () => {
  const url = `${getUrl()}/likes`;
  (async () => {
    const likes = await fromAPI(url);
    const btn = document.querySelectorAll('.likes-btn');

    btn.forEach((btn) => {
      likes.forEach((like) => {
        if (like.item_id.replace('movie', '') === btn.id.replace('like-btn-', '')) {
          btn.children[1].innerHTML = like.likes;
        }
      });
    });
  })();
};

export default getLikes;
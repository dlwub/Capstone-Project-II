const getMovie = async (id) => {
  const url = `https://api.tvmaze.com/shows/${id}`;
  const res = await fetch(url);
  return res.json();
};

export default getMovie;
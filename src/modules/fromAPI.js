const fromAPI = async (url) => {
  const response = await fetch(url,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  return response.json();
};

export default fromAPI;
import movieCount from "../modules/movieCount.js";

describe('', () => {
	test('Display number of movies', () => {
		document.body.innerHTML = `<div id="movie-count">${12}</div>`;
		expect(document.getElementById('movie-count').innerHTML).toBe("12");
	})
})
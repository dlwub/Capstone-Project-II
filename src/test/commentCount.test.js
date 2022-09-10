describe('', () => {
  test('Display number of comments', () => {
    document.body.innerHTML = `<div id="comment-count1">${12}</div>`;
    expect(document.getElementById('comment-count1').innerHTML).toBe('12');
  });
});
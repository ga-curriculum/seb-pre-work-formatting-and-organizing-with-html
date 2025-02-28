describe('Adding style to text', () => {
  it('successfully uses em and strong tags', () => {
    try {
      const emText = document.querySelector('em').innerText;
      expect(emText).toEqual('is');
      const strongOneText = document.querySelectorAll('strong')[0].innerText;
      expect(strongOneText).toEqual('Darkness');
      const strongTwoText = document.querySelectorAll('strong')[1].innerText;
      expect(strongTwoText).toEqual('Dark');
    } catch (err) {
      throw new Error('One or more text tags were not found on the page.');
    }
  });
});

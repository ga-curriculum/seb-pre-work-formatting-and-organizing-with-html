describe('Adding the div', () => {
  it('successfully includes the h2 with correct text', () => {
    try {
      const h2Text = document.querySelector('div h2').innerText;
      expect(h2Text).toEqual('Band Members');
    } catch (err) {
      throw new Error('The h2 was not found in the div.');
    }
  });
  it('successfully includes the ul with requested list items', () => {
    try {
      const ul = document.querySelector('div ul');
      const listItems = ul.querySelectorAll('li');
      expect(listItems.length).toEqual(4);
      expect(listItems[0].innerText).toEqual('Zelda Ziggler: Lead vocals');
      expect(listItems[1].innerText).toEqual(
        'Billy Chu: Lead guitar and backup vocals'
      );
      expect(listItems[2].innerText).toEqual('JP Parthasarathy: Bass guitar');
      expect(listItems[3].innerText).toEqual('Plum Porter: Percussion');
    } catch (err) {
      throw new Error(err);
    }
  });
});

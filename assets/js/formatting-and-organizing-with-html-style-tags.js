describe('The list formatting with <strong> and <em>', function () {
  it('should have a <strong> tag wrapping "Signature" in the second list item', function () {
    const listItems = document.querySelectorAll('ul li');

    if (listItems.length < 2) {
      fail(
        'Not enough <li> elements found. Ensure you have added all list items correctly.'
      );
    } else {
      const secondItem = listItems[1];
      const strongTag = secondItem.querySelector('strong');

      if (!strongTag) {
        fail(
          'No <strong> tag found around "Signature" in the second <li> item. Make sure to wrap "Signature" in <strong> tags.'
        );
      } else {
        expect(strongTag.textContent.trim()).toEqual('Signature');
      }
    }
  });

  it('should have an <em> tag wrapping "Organic" in the third list item', function () {
    const listItems = document.querySelectorAll('ul li');

    if (listItems.length < 3) {
      fail(
        'Not enough <li> elements found. Ensure you have added all list items correctly.'
      );
    } else {
      const thirdItem = listItems[2];
      const emTag = thirdItem.querySelector('em');

      if (!emTag) {
        fail(
          'No <em> tag found around "Organic" in the third <li> item. Make sure to wrap "Organic" in <em> tags.'
        );
      } else {
        expect(emTag.textContent.trim()).toEqual('Organic');
      }
    }
  });
});

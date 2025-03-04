describe('The team section inside a <div>', function () {
  it('should have a <div> containing the "Meet Our Team" section', function () {
    const div = document.querySelector('div');

    if (!div) {
      fail(
        'No <div> element found. Make sure you have added a <div> to contain the "Meet Our Team" section.'
      );
    }

    expect(div).not.toBeNull();
  });

  it('should have an <h2> inside the <div> with the text "Meet Our Team"', function () {
    const div = document.querySelector('div');

    if (!div) {
      fail(
        'No <div> element found. Ensure that your "Meet Our Team" section is inside a <div>.'
      );
    } else {
      const h2 = div.querySelector('h2');

      if (!h2) {
        fail(
          'No <h2> element found inside the <div>. Make sure you have an <h2> with the text "Meet Our Team".'
        );
      } else {
        expect(h2.textContent.trim()).toEqual('Meet Our Team');
      }
    }
  });

  it('should have a <ul> inside the <div> containing exactly 4 <li> team members', function () {
    const div = document.querySelector('div');

    if (!div) {
      fail(
        'No <div> element found. Ensure your team section is wrapped in a <div>.'
      );
    } else {
      const ul = div.querySelector('ul');

      if (!ul) {
        fail(
          'No <ul> element found inside the <div>. Make sure you have added a list for team members.'
        );
      } else {
        const listItems = ul.querySelectorAll('li');

        if (listItems.length !== 4) {
          fail(
            `Expected 4 team members in the <ul>, but found ${listItems.length}.\n\n❗ Make sure you have exactly four <li> elements for the team members.`
          );
        }

        expect(listItems.length).toEqual(4);
      }
    }
  });

  it('should contain the correct team member names in the <ul>', function () {
    const div = document.querySelector('div');

    if (!div) {
      fail(
        'No <div> element found. Ensure your team section is wrapped in a <div>.'
      );
    } else {
      const ul = div.querySelector('ul');

      if (!ul) {
        fail(
          'No <ul> element found inside the <div>. Make sure you have added a list for team members.'
        );
      } else {
        const expectedItems = [
          'Omar Khalid: Head Barista',
          'Aiden Lee: Pastry Chef',
          'Sofia Chen: Café Manager',
          'Mateo Alvarez: Customer Relations',
        ];

        const listItems = ul.querySelectorAll('li');
        const actualItems = Array.from(listItems).map((li) =>
          li.textContent.trim()
        );

        expectedItems.forEach((expectedText, index) => {
          if (!actualItems[index] || actualItems[index] !== expectedText) {
            fail(
              `Expected list item ${
                index + 1
              } to be "${expectedText}", but found "${
                actualItems[index] || 'MISSING'
              }".\n\n❗ Make sure the team member names and roles are spelled correctly and in the correct order.`
            );
          }

          expect(actualItems[index]).toEqual(expectedText);
        });
      }
    }
  });
});

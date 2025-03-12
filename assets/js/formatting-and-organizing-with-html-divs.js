describe('The team section inside a <div>', function () {
  it('should have a <div> specifically containing the "Meet Our Team" section', function () {
    const divs = document.querySelectorAll('div');
    let teamDiv = null;

    // Look for a div that contains an h2 with "Meet Our Team"
    divs.forEach((div) => {
      const h2 = div.querySelector('h2');
      if (h2 && h2.textContent.trim() === 'Meet Our Team') {
        teamDiv = div;
      }
    });

    if (!teamDiv) {
      fail(
        'No <div> element found containing an <h2> with the text "Meet Our Team". Ensure your team section is wrapped in a <div>.'
      );
    }

    expect(teamDiv).not.toBeNull();
  });

  it('should have an <h2> inside the correct <div> with the text "Meet Our Team"', function () {
    const teamDiv = document.querySelector('div h2');

    if (!teamDiv || teamDiv.textContent.trim() !== 'Meet Our Team') {
      fail(
        'No <h2> with the text "Meet Our Team" found inside a <div>. Make sure you have an <h2> with the correct text inside a <div>.'
      );
    }

    expect(teamDiv.textContent.trim()).toEqual('Meet Our Team');
  });

  it('should have a <ul> inside the correct <div> containing exactly 4 <li> team members', function () {
    const teamDivs = document.querySelectorAll('div');
    let teamDiv = null;

    teamDivs.forEach((div) => {
      const h2 = div.querySelector('h2');
      if (h2 && h2.textContent.trim() === 'Meet Our Team') {
        teamDiv = div;
      }
    });

    if (!teamDiv) {
      fail(
        'No <div> element found containing an <h2> with the text "Meet Our Team". Ensure your team section is wrapped in a <div>.'
      );
    }

    const ul = teamDiv.querySelector('ul');

    if (!ul) {
      fail(
        'No <ul> found inside the correct <div>. Make sure you have added a list for team members.'
      );
    }

    const listItems = ul.querySelectorAll('li');
    if (listItems.length !== 4) {
      fail(
        `Expected 4 team members in the <ul>, but found ${listItems.length}.`
      );
    }

    expect(listItems.length).toEqual(4);
  });

  it('should contain the correct team member names in the <ul>', function () {
    const teamDivs = document.querySelectorAll('div');
    let teamDiv = null;

    teamDivs.forEach((div) => {
      const h2 = div.querySelector('h2');
      if (h2 && h2.textContent.trim() === 'Meet Our Team') {
        teamDiv = div;
      }
    });

    if (!teamDiv) {
      fail(
        'No <div> element found containing an <h2> with the text "Meet Our Team". Ensure your team section is wrapped in a <div>.'
      );
    }

    const ul = teamDiv.querySelector('ul');

    if (!ul) {
      fail(
        'No <ul> found inside the correct <div>. Make sure you have added a list for team members.'
      );
    }

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
          }".`
        );
      }

      expect(actualItems[index]).toEqual(expectedText);
    });
  });
});

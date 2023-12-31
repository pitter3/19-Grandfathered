describe('About Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://one9checkserver.onrender.com/classes', {
      fixture: 'classes',
    }).as('getClasses');

    cy.intercept('GET', 'https://one9checkserver.onrender.com/factions', { 
      fixture: 'factions' 
    }).as('getFactions');
    
    cy.intercept('GET', 'https://one9checkserver.onrender.com/Priestgear', { 
      fixture: 'gear' 
    }).as('getGear');
    cy.visit('https://19check.vercel.app/');
    // Click on the About link in the header
    cy.get('nav').find('.links > :nth-child(2) > a').click();
  });

  it('should display verified gear information', () => {
    cy.get('.all-sections')
      .find('.mini-section')
      .first()
      .should('contain', 'Verified Gear')
      .find('p')
      .should('contain', 'All items are verified by top players in the 19 bracket.');
  });

  it('should display responsive design information', () => {
    cy.get('.all-sections')
      .find('.mini-section')
      .eq(1) // Assuming the second mini-section is about responsive design
      .should('contain', 'Responsive')
      .find('p')
      .should('contain', 'Responsive design allows you to use this site on your computer or phone!');
  });

  it('should display updated often information', () => {
    cy.get('.all-sections')
      .find('.mini-section')
      .last()
      .should('contain', 'Updated Often')
      .find('p')
      .should('contain', 'If an item is missing, reach out! discord: pitter3');

      cy.get('.donate').should('exist')
  });

  // Add more tests for other content on the About Page as needed
});

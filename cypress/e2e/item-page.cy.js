describe('Item Page', () => {
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
    // Navigate to the Item Page
    cy.get('.class-icons-container').first().click();
    cy.get('.faction-icons-container').first().click();
  });

  it('should display the header with image, home, and about sections', () => {
    cy.get('nav').should('exist');
    cy.get('nav').find('.logo').should('exist');
    cy.get('nav').find('.links > :nth-child(1) > a').should('exist');
    cy.get('.items-container')
    .find('.item')
    .should('have.length', 18);
    cy.get(':nth-child(1) > .containerx > input')
    .click()
    cy.get('.items-container')
  .find('.item')
  .first()
  .should('contain', 'Crescent Staff');

cy.get('.items-container')
  .find('.item')
  .last()
  .should('contain', 'Everglow Lantern');
  });
});

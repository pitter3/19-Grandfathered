describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://one9checkserver.onrender.com/classes', {
      fixture: 'classes',
    }).as('getClasses');
    cy.intercept('GET', 'https://one9checkserver.onrender.com/factions', { 
      fixture: 'factions' 
    }).as('getFactions');

  });

  it('should display the header with image, home, and about sections', () => {
    cy.visit('https://19check.vercel.app/');

    cy.get('nav').should('exist')
      .find('.logo').should('exist');
    cy.get('nav')
      .find('.links > :nth-child(1) > a').should('exist');
    cy.get('.header-container').should('contain', 'Choose your class');
    cy.get('.class-icons-container').find('.card').should('have.length', 9);
    cy.get('.class-icons-container')
      .find('div.card')
      .first()
      .find('img.class-image')
      .should('have.attr', 'id', 'Druid');

    cy.get('.class-icons-container')
      .find('div.card')
      .last()
      .find('img.class-image')
      .should('have.attr', 'id', 'Warrior');
  });
});

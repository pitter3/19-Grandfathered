describe('Faction Page', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should navigate to the faction page after clicking on any Rogue card', () => {
    cy.get('.class-icons-container')
      .first()
      .click();

    cy.get('nav').should('exist');
    cy.get('nav').find('.logo').should('exist');
    cy.get('nav').find('.links > :nth-child(1) > a').should('exist');
    cy.get('.header-container').should('contain', 'Choose your faction');

    cy.get('.a-container img.classy-image').should('have.attr', 'src').and('include', 'Icon_Priest.png');
    cy.get('.faction-icons-container').find('.faction-card').should('have.length', 3);
    cy.get('.faction-icons-container')
    .first()
    .find('p.faction-name')
    .should('contain', 'alliance');
  

  cy.get('.faction-icons-container')
    .last()
    .find('p.faction-name')
    .should('contain', 'horde');
  });

});

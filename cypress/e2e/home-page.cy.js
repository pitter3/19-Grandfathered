describe('Home Page', () => {
  it('should display the header with image, home, and about sections', () => {
    cy.visit('localhost:3000');
    
    cy.get('nav').should('exist')
    .find('.logo').should('exist')
    cy.get('nav')
    .find('.links > :nth-child(1) > a').should('exist')
    cy.get('.header-container').should('contain', 'Choose your class')
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
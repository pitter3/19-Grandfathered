describe('Faction Page', () => {
  beforeEach(() => {
    // Visit the home page before each test in this suite
    cy.visit('localhost:3000');
  });

  it('should navigate to the faction page after clicking on any Rogue card', () => {
    // Wait for some time before clicking to ensure the state update is completed
    cy.get('.class-icons-container')
      .first()
      .click();

    // Now you are on the faction page, you can add assertions for the faction page here
    // For example, you can check if elements specific to the faction page are present

    // Check if the header is there
    cy.get('nav').should('exist');
    cy.get('nav').find('.logo').should('exist');
    cy.get('nav').find('.links > :nth-child(1) > a').should('exist');
    cy.get('.header-container').should('contain', 'Choose your faction');

    // Check if the priest image is present
    cy.get('.a-container img.classy-image').should('have.attr', 'src').and('include', 'Icon_Priest.png');
  });

  // Add more tests for the faction page as needed
});

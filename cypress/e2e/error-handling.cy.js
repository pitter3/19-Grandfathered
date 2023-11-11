describe('404 Not Found Page', () => {
  beforeEach(() => {
    // Visit a non-existent page to trigger a 404 error
    cy.visit('localhost:3000/nonexistent-page');
  });

  it('should display the custom 404 Not Found page with a "Go Home" button', () => {
    // Add assertions to check if the 404 page is displayed
    cy.get('.page').should('exist');
    cy.get('h1').contains('404 - Not Found')
    cy.get('p').contains('Sorry, the page you are looking for does not exist.')
    cy.get('.home-button').should('exist')

    cy.get('.home-button').should('exist').click();

    // Check if the URL changes to the home page
    cy.url().should('include', '/');
  });

  // Add more tests for other elements on the 404 page if needed
});

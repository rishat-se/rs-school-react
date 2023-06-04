describe('RS-School React App Form Page Test', () => {
  it('Visit Form Page', () => {
    cy.visit('/form');
    cy.get('button').should('have.text', 'Create');
    cy.get('button').click();
    cy.get('span[class="error-msg"]').its('length').should('eq', 8);
  });
});

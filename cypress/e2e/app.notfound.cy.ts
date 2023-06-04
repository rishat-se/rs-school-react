describe('RS-School React App NotFound Page Test', () => {
  it('Visit NotFound Page', () => {
    cy.visit('/abcdef');
    cy.get('h1').contains('404');
  });
});

describe('RS-School React App AboutUs Page Test', () => {
  it('Visit AboutUs Page', () => {
    cy.visit('/aboutus');
    cy.get('p').contains('Lorem');
  });
});

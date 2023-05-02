describe('RS-School React App Home Page Test', () => {
  it('Open and Close Full Card', () => {
    cy.visit('/');
    cy.get('img[alt="Rick Sanchez image"').click();
    cy.get('article[class="fullcard"]').should('exist');
    cy.get('button').contains('✖').click();
    cy.get('article[class="fullcard"]').should('not.exist');
  });

  it('Type and Submit Search Value', () => {
    cy.visit('/');
    cy.get('input[type="search"]').type('morty');
    cy.get('button').contains('Search').click();
    cy.get('input[type="search"]').should('have.value', 'morty');
    cy.get('li[class="card"]').its('length').should('eq', 20);
  });

  it('Type and Submit aaaaa as Search Value and check presense of error', () => {
    cy.visit('/');
    cy.get('input[type="search"]').type('aaaaa');
    cy.get('button').contains('Search').click();
    cy.get('input[type="search"]').should('have.value', 'aaaaa');
    cy.get('div[role="alert"]').should('exist');
  });
});

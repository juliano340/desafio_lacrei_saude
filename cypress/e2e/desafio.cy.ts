describe('Desafio Page', () => {
  it('should load the Desafio page', () => {
    cy.visit('http://localhost:3000/desafio');
    cy.contains('Desafio Lacrei Saúde').should('be.visible');
    cy.contains('habilidades em desenvolvimento web').should('be.visible');
  });
});

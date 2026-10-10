describe('Questão 2 - Validação de Carregamento Dinâmico', () => {
  it('Deve aguardar o término do carregamento e exibir o texto Hello World', () => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')
    cy.get('#start button').click()
    cy.get('#loading', { timeout: 10000 }).should('not.be.visible')
    cy.get('#finish h4').should('have.text', 'Hello World!')
  })
})
```eof


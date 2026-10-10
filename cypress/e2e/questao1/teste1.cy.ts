describe('Questão 1 - Validação de Mensagem de Erro no Login', () => {
  it('Deve exibir mensagem de erro correta quando os campos estiverem em branco', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('button[type="submit"]').click()
    cy.get('#flash').should('contain.text', 'Your username is invalid!')
    cy.get('#flash').should('have.class', 'error')
  })
})
```eof

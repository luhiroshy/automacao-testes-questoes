describe('Questão 3 - Gerenciamento do Carrinho no SauceDemo', () => {
  it('Deve adicionar três produtos, remover um e validar o contador do carrinho', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()

    cy.get('.shopping_cart_badge').should('have.text', '2')
  })
})
```eof


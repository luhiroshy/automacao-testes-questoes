describe('Questão 5 - Rastreio de Produtos com Valor Menor que $20', () => {
  it('Deve listar e filtrar os produtos abaixo de $20', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.inventory_item').each(($el) => {
      cy.wrap($el).find('.inventory_item_name').invoke('text').then((name) => {
        cy.wrap($el).find('.inventory_item_price').invoke('text').then((priceText) => {
          const price = parseFloat(priceText.replace('$', '').trim())
          if (price < 20.00) {
            cy.log(`Produto: ${name} - Preço: $${price}`)
          }
        })
      })
    })
  })
})
```eof

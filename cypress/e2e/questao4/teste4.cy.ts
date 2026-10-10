describe('Questão 4 - Extração do Laptop Mais Caro', () => {
  it('Deve extrair o preço do laptop mais caro e validar que é maior que zero', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.contains('a', 'Laptops').click()
    cy.get('.card-title', { timeout: 10000 }).should('have.length.greaterThan', 0)

    const prices: number[] = []
    cy.get('.card').each(($el) => {
      cy.wrap($el).find('h5').invoke('text').then((text) => {
        const price = parseFloat(text.replace('$', '').trim())
        prices.push(price)
      })
    }).then(() => {
      const maxPrice = Math.max(...prices)
      expect(maxPrice).to.be.greaterThan(0)
    })
  })
})
```eof

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('[href="/listings"] > li').click()
    cy.get('.ListingContainer_input-bar__ZDahT').type('strawberries').get('.ListingContainer_search-button__IcPHz').click()
  })
})
describe('when viewing the homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the navigation bar', () => {
    cy.get('.js-nav-link-home').should('be.visible')
  })
})
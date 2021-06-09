describe('when viewing the homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the navigation bar', () => {
    cy.get('.js-nav-link-home').should('be.visible')
  })

  it('should display the footer', () => {
    cy.get('.js-footer-link-home').should('be.visible')
  })
})
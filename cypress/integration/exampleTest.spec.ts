describe('Initial test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should find test on the page', () => {
    cy.contains('TEST')
  })
})

export {}
describe('Hospitals', () => {
  it('video and 3 hospital images', () => {
    cy.visit('/')

    cy.get('video').should('be.visible')
    cy.get('video').should('have.prop', 'paused', false)

    cy.wait(5000)

    cy.get('button').contains('Pause').click()
    cy.get('video').should('have.prop', 'paused', true)

    cy.get('button').contains('Hospital List').click()

    cy.get('img').should('have.length.gte', 3)
  })
})
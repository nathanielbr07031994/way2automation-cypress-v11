class CoursePage {
  open() {
    cy.visit('http://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects', { failOnStatusCode: false })
  }

  enrollInUSD() {
    cy.contains('PAY IN USD').click()
    cy.contains('$29').should('be.visible')
    cy.get('#enroll-button').click()
    cy.contains('Processing...').should('exist')
    cy.contains('Order Summary').should('exist')
  }
}

export default new CoursePage()

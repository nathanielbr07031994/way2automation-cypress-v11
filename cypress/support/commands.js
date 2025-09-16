// Custom command to generate unique email
Cypress.Commands.add('uniqueEmail', () => {
  return cy.wrap(`test_${Date.now()}@getnada.com`)
})

// Custom command to generate unique username
Cypress.Commands.add('uniqueUsername', () => {
  return cy.wrap(`testuser${Date.now()}`)
})

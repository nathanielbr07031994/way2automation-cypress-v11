import RegistrationPage from '../support/pageObjects/RegistrationPage'
import CoursePage from '../support/pageObjects/CoursePage'
//Step 1 Navigate to the web page https://www.way2automation.com/demo.html#.
describe('Way2Automation Demo Flow', () => {

  beforeEach(() => {
    cy.visit('https://www.way2automation.com/demo.html#')
  })
//Step 2 Collect all categories and their actions into a JSON object and print it to the console.
  it('Collects categories', () => {
    const categories = {}
    cy.get('#toggleNav ul > li').each(($li) => {
      const category = $li.find('a:first').text().trim().toLowerCase()
      const actions = []
      $li.find('ul > li a').each((_, el) => {
        actions.push(Cypress.$(el).text().trim().toLowerCase())
      })
      categories[category] = actions
    }).then(() => {
      expect(Object.keys(categories)).to.not.be.empty
      cy.log('Categories JSON:', JSON.stringify(categories, null, 2))
    })
  })
//Step 3-5 Register a new user using the registration form and verify successful registration by checking for the presence of the "EXPLORE LIFETIME MEMBERSHIP" link.
  it('Registers a new user', () => {
     cy.contains('Dynamic Elements')
      .parents('li')
      .find('a')
      .contains('Submit Button Clicked')
      .invoke('attr', 'href')
      .then((url) => {
        cy.visit(url, { timeout: 120000, failOnStatusCode: false })
      })

    cy.fixture('user').then((user) => {
      RegistrationPage.fillForm(user)
    })
//Step 5 and 6 Verify successful registration by checking for the presence of the "EXPLORE LIFETIME MEMBERSHIP" link and scroll to "30+ Courses video library" section.
    cy.contains('a', 'EXPLORE LIFETIME MEMBERSHIP').click({ force: true })
    cy.contains('30+ Courses video library').should('be.visible').scrollIntoView()
  })
//Step 10-11 Navigate to the "Automation Architect in Selenium: 7 Live Projects" course page, start the course, and verify that the "Start" button is visible.
  //Step is modified as carousel is not working properly
  it('Enrolls in Automation Architect course', () => {
    CoursePage.open()
    cy.contains('CucumberParallelWithPageObjects - Project Code').scrollIntoView()
//Step 12-14 Enroll in the course by clicking the "PAY IN USD" button, verify that the price is $29, and proceed to checkout by clicking the "Enroll" button.
    cy.contains('Start').click()
    cy.contains('Start').should('be.visible')

    CoursePage.open()
    CoursePage.enrollInUSD()

    cy.get('input').each(($input) => {
      cy.wrap($input).focus().blur()
      cy.get('.error, .invalid-feedback').should('exist')
    })
    cy.screenshot('final-order-page')
  })
})

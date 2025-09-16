class RegistrationPage {
  fillForm(user) {
    cy.get('input[name="name"]').type(user.name)
    cy.get('input[name="phone"]').type(user.phone)
    cy.uniqueEmail().then((email) => {
      cy.get('input[name="email"]').type(email)})
    cy.get('input[name="city"]').type(user.city)
    cy.uniqueUsername().then((username) => {
      cy.get('input[name="username"]:visible').type(username)})
    cy.get('input[name="password"]:visible').type(user.password)
    cy.get('input[type="submit"]:visible').click()
  }
}
export default new RegistrationPage()

describe('signup', () => {
  const randomEmail = `test${Math.floor(Math.random() * 10000)}@example.com`
  const randomPassword = `Main${Math.floor(Math.random() * 10000)}@`
  before(() => {
    cy.visit('/')
    cy.get('.close-dialog > .mdc-button__label > span').should(
      'contain',
      'Dismiss'
    )
    cy.get('.close-dialog > .mdc-button__label > span').click({
      force: true
    })
    cy.get('#navbarAccount > .mdc-button__label > span').click({ force: true })
    cy.get('#navbarLoginButton').click({ force: true })
    cy.url().should('include', '/login')
    cy.get('#newCustomerLink > .primary-link').click({ force: true })
    cy.url().should('include', '/register')
    cy.get('#emailControl').type(randomEmail)
    cy.get('#passwordControl').type(randomPassword)
    cy.get('#repeatPasswordControl').type(randomPassword)
    cy.get('#mat-mdc-form-field-label-8 > mat-label').click({ force: true })
    cy.get('#mat-option-3 > .mdc-list-item__primary-text').click({
      force: true
    })
    cy.get('#securityAnswerControl').type('test answer')
    cy.get('#registerButton').click({ force: true })
    cy.url().should('include', '/login')
    cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label').should(
      'contain',
      'Registration completed successfully. You can now log in.'
    )
  })
  describe('Valid', () => {
    it.only('S-V-0001 Should  able to login with a valid email and password ', () => {
      cy.visit('/')
      cy.contains('account').click({ force: true })
      cy.get('#navbarLoginButton').click({ force: true })
      cy.url().should('include', '/login')
      cy.get('#email').type(randomEmail)
      cy.get('#password').type(randomPassword)
      cy.get('#loginButton').click({ force: true })
      cy.url().should('not.include', '/login')
      cy.get('.fa-layers-counter').contains(0)
    })
    // it('S-V-0002 Should show error message when not providing the email  ', () => {
    //   expect(true).to.eq(true)
    // })
  })
  describe('Invalid', () => {
    // it('S-IV-0001 Should show error message when providing a duplicate email  ', () => {
    //   expect(true).to.eq(true)
    // })
  })
})

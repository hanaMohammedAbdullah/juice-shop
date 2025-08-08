describe('signup', () => {
  const randomEmail = `test${Math.floor(Math.random() * 10000)}@example.com`
  describe('Valid', () => {
    it('S-V-0001 Should  able to register with a valid email ', () => {
      cy.visit('/')
      cy.get('.close-dialog > .mdc-button__label > span').should(
        'contain',
        'Dismiss'
      )
      cy.get('.close-dialog > .mdc-button__label > span').click({
        force: true
      })
      cy.get('.cc-btn').click({ force: true })
      cy.contains('account').click({ force: true })
      cy.get('#navbarLoginButton').click({ force: true })
      cy.url().should('include', '/login')
      cy.get('#newCustomerLink > .primary-link').click({ force: true })
      cy.url().should('include', '/register')
      cy.get('#emailControl').type(randomEmail)
      cy.get('#passwordControl').type('Main1234@')
      cy.get('#repeatPasswordControl').type('Main1234@')
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
    it('S-V-0001 Should show error message when not providing the email  ', () => {
      cy.visit('#/register/')
      cy.get('.close-dialog > .mdc-button__label > span').should(
        'contain',
        'Dismiss'
      )
      cy.get('.close-dialog > .mdc-button__label > span').click({
        force: true
      })
      cy.get('.cc-btn').type('')
      cy.get('#passwordControl').type('Main1234@')
      cy.get('#repeatPasswordControl').type('Main1234@')
      cy.url().should('include', '/register')
      cy.get('#emailControl').click({ force: true })
      cy.get('#mat-mdc-error-4').should(
        'contain',
        'Please provide an email address.')
    })
  })
  describe('Invalid', () => {
    const ConstrandomEmail = randomEmail
    it('S-IV-0001 Should show error message when not providing the email  ', () => {
      cy.visit('#/register/')
      cy.get('.close-dialog > .mdc-button__label > span').should(
        'contain',
        'Dismiss'
      )
      cy.get('.close-dialog > .mdc-button__label > span').click({
        force: true
      })
      cy.get('.cc-btn').click({ force: true })
      cy.url().should('include', '/register')
      cy.get('#emailControl').type(ConstrandomEmail)
      cy.get('#passwordControl').type('Main1234@')
      cy.get('#repeatPasswordControl').type('Main1234@')
      cy.get('#mat-mdc-form-field-label-5 > mat-label').click({ force: true })
      cy.get('#mat-option-3 > .mdc-list-item__primary-text').click({
        force: true
      })
      cy.get('#securityAnswerControl').type('test answer')
      cy.get('#registerButton').click({ force: true })
      cy.get('.error').should(
        'contain',
        'Email must be unique'
      )
    })
  })
})

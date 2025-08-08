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
        force: true,
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
        force: true,
      })
      cy.get('#securityAnswerControl').type('test answer')
      cy.get('#registerButton').click({ force: true })
      cy.url().should('include', '/login')
      cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label').should(
        'contain',
        'Registration completed successfully. You can now log in.'
      )
    })
    it('S-V-0002 Should show error message when not providing the email  ', () => {
      cy.visit('#/register/')
      cy.get('.close-dialog > .mdc-button__label > span').should(
        'contain',
        'Dismiss'
      )
      cy.get('.close-dialog > .mdc-button__label > span').click({
        force: true
      })
      cy.get('.cc-btn').click({ force: true })
      cy.get('#emailControl').click({ force: true })
      cy.get('#passwordControl').type('Main1234@')
      cy.get('#repeatPasswordControl').type('Main1234@')
      cy.url().should('include', '/register')
      cy.get('.mat-mdc-form-field-error-wrapper').contains(
        'Please provide an email address.'
      )
    })
    it('S-V-0003 Should show error message when not providing the  password  ', () => {
      cy.visit('#/register/')
      cy.get('.close-dialog > .mdc-button__label > span').should(
        'contain',
        'Dismiss'
      )
      cy.get('.close-dialog > .mdc-button__label > span').click({
        force: true
      })
      cy.get('.cc-btn').click({ force: true })
      cy.get('#emailControl').type(randomEmail)
      cy.get('#passwordControl').click({ force: true })
      cy.get('#repeatPasswordControl').type('Main1234@')
      cy.url().should('include', '/register')
      cy.get(
        '.ng-pristine.mat-form-field-invalid > .mat-mdc-form-field-subscript-wrapper > .mat-mdc-form-field-error-wrapper'
      ).should('contain', 'Please provide a password.')
    })
    it('S-V-0004 Should show error message when not providing the repeat password   ', () => {
      cy.visit('#/register/')
      cy.get('.close-dialog > .mdc-button__label > span').should(
        'contain',
        'Dismiss'
      )
      cy.get('.close-dialog > .mdc-button__label > span').click({
        force: true
      })
      cy.get('.cc-btn').click({ force: true })
      cy.get('#passwordControl').type('Main1234@')
      cy.get('#repeatPasswordControl').click({ force: true })
      cy.get('#emailControl').type(randomEmail)
      cy.url().should('include', '/register')
      cy.get(
        '.ng-pristine.mat-form-field-invalid > .mat-mdc-form-field-subscript-wrapper > .mat-mdc-form-field-error-wrapper'
      ).should('contain', ' Please repeat your password.')
      // cy.get(
      //   '.ng-dirty.mat-form-field-invalid > .mat-mdc-form-field-subscript-wrapper > .mat-mdc-form-field-error-wrapper'
      // ).should('contain', ' Passwords do not match')
    })
    it('S-V-0005 Should show error message when not providing the email  ', () => {
      cy.visit('#/register/')
      cy.get('.close-dialog > .mdc-button__label > span').should(
        'contain',
        'Dismiss'
      )
      cy.get('.close-dialog > .mdc-button__label > span').click({
        force: true
      })
      cy.get('.cc-btn').click({ force: true })
      cy.get('#passwordControl').type('Main1234@S')
      cy.get('#repeatPasswordControl').type('Main1234@')
      cy.get('#emailControl').type(randomEmail)
      cy.url().should('include', '/register')
      cy.get(
        '.ng-dirty.mat-form-field-invalid > .mat-mdc-form-field-subscript-wrapper > .mat-mdc-form-field-error-wrapper'
      ).should('contain', ' Passwords do not match')
    })
  })
  describe('Invalid', () => {
    const ConstrandomEmail = randomEmail
    it('S-IV-0001 Should show error message when providing a duplicate email  ', () => {
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
      cy.get('.error').should('contain', 'Email must be unique')
    })
  })
})

// Nesta página estarão mapeados todos os elementos necessários para fazer signUp e as ações

const { clickables } = require("./page_login")

const name = "Ricardo"
const lastname = "Santos"
const password = "Santos"
const incompletepassword = "San"
const differentpassword = "Ricardo"
const user = name.toLowerCase()

module.exports = {

    fields: {
        firstName: '#firstName',
        lastName: '#lastName',
        username: '#username',
        password: '#password',
        confirmPassword: '#confirmPassword',
        helperText: '#password-helper-text',
        confirmHelperText: '#confirmPassword-helper-text',
        
    },

    clickables: {
        signUpButton: '[data-test="signup"]',
        signUpSubmitButton: '[data-test="signup-submit"]',
    },

    messages: {
        passwordDontMatchMessage: 'Password does not match',
        invalidPasswordMessage: 'Password must contain at least 4 characters'

    },

    acessarSignUp(){
        cy.visit('http://localhost:3000/signup')
    },

    sucessfullCreate(){
        cy.get(this.fields.firstName).type(name)
        cy.get(this.fields.lastName).type(lastname)
        cy.get(this.fields.username).type(user)
        cy.get(this.fields.password).type(password)
        cy.get(this.fields.confirmPassword).type(password)
        cy.get(this.clickables.signUpSubmitButton).click()
    },

    sucessfullConfirmation () {
        cy.get(this.fields.username).should('be.empty')
    },

    lessDigitsPassword () {
        cy.get(this.fields.firstName).type(name)
        cy.get(this.fields.lastName).type(lastname)
        cy.get(this.fields.username).type(user)
        cy.get(this.fields.password).type(incompletepassword)
        cy.get(this.fields.helperText).should('contain' , this.messages.invalidPasswordMessage)
    },

    differentPassword() {
        cy.get(this.fields.firstName).type(name)
        cy.get(this.fields.lastName).type(lastname)
        cy.get(this.fields.username).type(user)
        cy.get(this.fields.password).type(password)
        cy.get(this.fields.confirmPassword).type(differentpassword)
        cy.get(this.fields.confirmHelperText).should('contain' , this.messages.passwordDontMatchMessage)
    },

    unsucesfullConfirmation() {
        cy.get(this.clickables.signUpSubmitButton).should('be.disabled')
      }
    }
// Nesta página estarão mapeados todos os elementos necessários para fazer login e as ações

const user = "ricardo"
const incorrectuser = user + "0"
const pass = "Santos"
const incorrectpass = pass +"0"

module.exports = {

    fields: {

        user: '#username',
        password: '#password',
        alertmessage: '.MuiAlert-message',
        invalidmessage: 'Username or password is invalid',
        validateLogin: '[data-test="sidenav-username"]'
    
    },
    
    clickables:{
    
        signinbutton: '[data-test="signin-submit"]'
    
    },

    acessarLogin(){
        cy.visit('http://localhost:3000/signin')
    },

    preencherLoginCorreto(){
        cy.get(this.fields.user).type(user)
        cy.get(this.fields.password).type(pass)
        cy.get(this.clickables.signinbutton).click()
    },

    preencherLoginIncorreto () {
        cy.get(this.fields.user).type(incorrectuser)
        cy.get(this.fields.password).type(pass)
        cy.get(this.clickables.signinbutton).click()
    },

    preencherSenhaIncorreta() {
        cy.get(this.fields.user).type(user)
        cy.get(this.fields.password).type(incorrectpass)
        cy.get(this.clickables.signinbutton).click()
    },

    preencherSenhaELoginIncorretos() {
        cy.get(this.fields.user).type(incorrectuser)
        cy.get(this.fields.password).type(incorrectpass)
        cy.get(this.clickables.signinbutton).click()
    },

    validarLogin(){
        cy.get(this.fields.validateLogin).should('contain' , user)
    },

    validarMensagemDeErro() {
        cy.get(this.fields.alertmessage).should('contain', this.fields.invalidmessage)
    }

}
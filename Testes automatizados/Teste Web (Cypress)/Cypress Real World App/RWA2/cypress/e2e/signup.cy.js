/// <reference types="cypress"/>

import { qase } from 'cypress-qase-reporter/dist/mocha'; // integra o Cypress com o QASE
import Signup from "../pages/page_signup.js" // importa a Page Object

describe('Testes funcionais da Feature Singup', () => {
    beforeEach(() => {
        Signup.acessarSignUp()
    })

qase(8,
    it('Verifica se o usuário consegue criar um registo com sucesso na plataforma, inserindo todos os dados corretamente', () => {
             
        Signup.sucessfullCreate()
        Signup.sucessfullConfirmation()
          
        })
    );
qase(9,
    it('Verifica se o usuário consegue criar um registo com sucesso na plataforma, inserindo apenas 3 dígitos no campo Password', () => {
        Signup.lessDigitsPassword()
        Signup.unsucesfullConfirmation()
    })
    );

qase(10,
it('Verifica se o usuário consegue criar um registo com sucesso na plataforma, inserindo valores diferentes nos campos Password e Confirm Password', () => {
    
    Signup.differentPassword()
    Signup.unsucesfullConfirmation()
      })
);

})
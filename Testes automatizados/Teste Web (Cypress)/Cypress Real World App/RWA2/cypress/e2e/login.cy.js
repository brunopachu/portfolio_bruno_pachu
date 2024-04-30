/// <reference types="cypress"/>

import { qase } from 'cypress-qase-reporter/dist/mocha'; // integra o Cypress com o QASE
import Login from "../pages/page_login.js" // importa a Page Object
describe('Testes funcionais da Feature Login', () => {
  beforeEach(() => {
    Login.acessarLogin()
  })

  qase(1,
  it('Verifica se o usuário consegue logar usando user e password válidos', () => {
       
    Login.preencherLoginCorreto()
    Login.validarLogin()
    
  })
);
  qase(4,
  it('Verifica se o usuário consegue logar usando um user incorreto, porém com a password correta', () => {
    
    Login.preencherLoginIncorreto()
    Login.validarMensagemDeErro()
    
  })
);
  qase(5,
  it('Verifica se o usuário consegue logar usando um user correto, porém com a password incorreta', () => {
    
    Login.preencherSenhaIncorreta()
    Login.validarMensagemDeErro()
    
  })
);

  qase(7,
  it('Verifica se o usuário consegue logar usando user e password incorretos', () => {
    
    Login.preencherSenhaELoginIncorretos()
    Login.validarMensagemDeErro()
    
  })
);

});
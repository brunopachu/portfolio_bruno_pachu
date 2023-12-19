Feature('login');

Scenario('login com sucesso',  ({ I }) => {

    I.amOnPage('https://www.automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user','brunopachu12@gmail.com')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 2)

}).tag('@sucesso')

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('https://www.automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user','brunopachu12@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida', 2)

}).tag('@senhainvalida')

Scenario('Tentando Logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('https://www.automationpratice.com.br/')
    I.click('Login')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 2)

}).tag('@emailesenha')

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('https://www.automationpratice.com.br/')
    I.click('Login')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 2)

}).tag('@emailinvalido')
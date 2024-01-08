const assert = require('assert') // importa a biblioteca assert para usar, o nome da VAR não importa, o que importa a biblioteca é o require('assert')
const faker = require ('@faker-js/faker'); // importa a biblioteca (previamente instalada) do FAKER

Feature('Login');

Scenario('Login With Sucess', ({ I }) => { 

    // home_page
    I.amOnPage('') // como está vazio ele vai para a página padrão que está no codecept.conf.js
    I.click('.fa-user')

    // login_page
    I.waitForElement('#user')
    I.fillField('#user', faker.fakerPT_BR.internet.email())
    I.fillField('#password', secret(faker.fakerPT_BR.internet.password()))
    I.click('#btnLogin')
    I.see('Login realizado')
        
    }).tag('sucesslogin')
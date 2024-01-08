const assert = require('assert') // importa a biblioteca assert para usar, o nome da VAR não importa, o que importa a biblioteca é o require('assert')
const faker = require ('@faker-js/faker'); // importa a biblioteca (previamente instalada) do FAKER
const {I, home_page, register_page, my_account_page, customer_account_details_page, account_edit_page, profile_page} = inject() // adiciona (injeta) no teste as OBJECTS PAGES

Feature('Edit User Data');

Scenario('Editing Account', () => { // "I" retirado devido já estar lá em cima

    
    I.amOnPage('') // como está vazio ele vai para a página padrão que está no codecept.conf.js
    
    //home
    home_page.AccessRegisterPage()
    
    //register
    register_page.submitRegister(faker.fakerPT_BR.person.fullName(), faker.fakerPT_BR.internet.email(), secret(faker.fakerPT_BR.internet.password()))
    
    //my_account
    my_account_page.enterMyAccount()

    //customer_account_details
    customer_account_details_page.updateCustomerDetails()
    
    //account_edit
    account_edit_page.editCustomerDetails()

    //profile
    profile_page.profileConfirmation()

}).tag('edit_user')
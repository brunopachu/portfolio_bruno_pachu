const { I } = inject();
const faker = require ('@faker-js/faker')

module.exports = {

  fields: {

    first_name: '#f_name',
    last_name: '[placeholder="Dhoe"]',
    email_address: '#email_address',
    current_password: '#current_password',
    new_password: '#new_password',
    re_password: '#re_password',

  },

  buttons: {
    
    update_button: '.btn_sm'
    
  },

  messages:{


  },

  editCustomerDetails(){

    I.waitForElement(this.fields.first_name)
    I.fillField(this.fields.first_name, faker.fakerPT_BR.person.firstName())
    I.fillField(this.fields.last_name, faker.fakerPT_BR.person.lastName())
    I.fillField(this.fields.email_address, faker.fakerPT_BR.internet.email())
    I.fillField(this.fields.current_password, secret(faker.fakerPT_BR.internet.password()))
    I.fillField(this.fields.new_password, secret(faker.fakerPT_BR.internet.password()))
    I.fillField(this.fields.re_password, secret(faker.fakerPT_BR.internet.password()))
    I.click(this.buttons.update_button)
        
  }
}

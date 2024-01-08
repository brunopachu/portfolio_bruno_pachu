const { I } = inject();

module.exports = {

  fields: {

    username: '#user',
    email_address: '#email',
    password: '#password',
    
  },

  buttons: {
    
    register_button: '#btnRegister'
      
  },

  messages:{


  },

  submitRegister(user, email, pass){

    I.waitForElement(this.fields.username)
    I.fillField(this.fields.username, user)
    I.fillField(this.fields.email_address, email)
    I.fillField(this.fields.password, pass)
    I.click(this.buttons.register_button)    
  }
  
  }
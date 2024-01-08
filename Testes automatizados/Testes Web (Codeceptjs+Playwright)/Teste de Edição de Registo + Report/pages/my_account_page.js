const { I } = inject();

module.exports = {

  fields: {

        
  },

  buttons: {
    
    details_button: '.fa-user'
      
  },

  messages:{


  },

  enterMyAccount(){

    I.click('OK')
    I.click(this.buttons.details_button)
    I.wait(1)
  }
}

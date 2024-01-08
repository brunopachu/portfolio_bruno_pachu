const { I } = inject();

module.exports = {

  fields: {

         
  },

  buttons: {
    
            
  },

  messages:{


  },

  profileConfirmation() {
    I.waitForText('Profile',2)
    I.see('Profile')

  }

}

const { I } = inject();

module.exports = {

  fields: {

     
     
  },

  buttons: {
    
    checkbutton_offer: 'label[for="offer"]', // como há um label neste checkbutton, tem que usar o label
     
    checkbutton_newsletter: 'label[for="newsletter"]', // como há um label neste checkbutton, tem que usar o label

    update_button: '.btn_sm'
      
  },

  messages:{


  },

  updateCustomerDetails(){

    I.checkOption(this.buttons.checkbutton_offer) 
    I.checkOption(this.buttons.checkbutton_newsletter)
    I.click(this.buttons.update_button)
    
  }

}

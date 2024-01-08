const { I } = inject();

module.exports = {

  fields: {

  },

  buttons: {

    register: '.fa-lock'
  
  },

  messages:{


  },

  AccessRegisterPage() {
    I.click(this.buttons.register)
  }

}

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'projeto2_codeceptjs_playwright',
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.automationpratice.com.br',
      show: true,
      waitForTimeout: 10000,
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless", */ "window-size=1920x1200"]
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    home_page: "./pages/home_page.js",
    register_page: "./pages/register_page.js",
    my_account_page: "./pages/my_account_page.js",
    customer_account_details_page: "./pages/customer_account_details_page.js",
    account_edit_page: "./pages/account_edit_page.js",
    profile_page: "./pages/profile_page.js",
  },
  bootstrap: async () => {
      // Configurações antes dos testes
    await console.log('Iniciando o ambiente de teste');
      // Outras configurações necessárias
    },
  teardown: async () => {
      // Ações após a execução de todos os testes
    await console.log('Finalizando o ambiente de teste');
      // Outras ações finais, se necessário
    },
  mocha: {},
  plugins: {
    allure: {
      enabled:true
    },
    stepByStepReport: {
      enabled: false,
      fullPageScreenshots: true,
      deleteSuccessful: false // deletar as screenshots quando teste passa?
    },
    mocha: {
      reporterOptions: {
      }
    },      
  } 
  }

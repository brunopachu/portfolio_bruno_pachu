const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",

  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, cypress-qase-reporter",
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
    },
    cypressQaseReporterReporterOptions: {
      apiToken:
        "4c0335fc0e3d39248516a1b8f44a306cb296c58ab8a263f467bcd428aff755df",
      projectCode: "CP",
      logging: true,
      basePath: "https://api.qase.io/v1",
      screenshotFolder: "screenshots",
      sendScreenshot: true,
      runComplete: true,
      rootSuiteTitle: "Cypress tests",
    },

    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

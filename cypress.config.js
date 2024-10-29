const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "juy6sr",
    baseUrl: 'https://automationpratice.com.br',
    reporter: 'cypress-mochawesome-reporter',
    screenshotOnRunFailure: true,
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: true,
      embeddedScreenshots: true,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});

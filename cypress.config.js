const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "8fcew8",
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'testing-cypress-report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/report'
  },
  
  
  e2e: {
    //This active the Cypress Studio
    experimentalStudio: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);      
    },
  },
});

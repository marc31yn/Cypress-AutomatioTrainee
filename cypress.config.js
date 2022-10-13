const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  projectId: "8fcew8",
  chromeWebSecurity: false,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});

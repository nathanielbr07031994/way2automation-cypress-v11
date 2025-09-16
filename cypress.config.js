const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: 'https://www.way2automation.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false, // to handle mixed content
    experimentalSessionAndOrigin: true,  
    experimentalModifyObstructiveCode: true,
    pageLoadTimeout: 180000, // wait up to 3 minutes
    defaultCommandTimeout: 10000 // optional: wait longer for commands
  
  },
});

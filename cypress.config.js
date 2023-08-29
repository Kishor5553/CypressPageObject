const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)  // for html reporter

    },
    baseUrl: 'https://www.automationexercise.com/',
    specPattern:[
      "cypress/src/test/testCases/**.cy.js",
    ],
    reporter:'cypress-mochawesome-reporter',

    fixturesFolder:'cypress/src/test/resources',
    downloadsFolder:'cypress/src/downloads',
    supportFile:'cypress/src/main/support/e2e.js',
    
    defaultCommandTimeout:6000,  //default 4000, wait until most DOM based commands are considered timed out.
    pageLoadTimeout:80000,  // default 60000 wait for page transition events
    responseTimeout:40000, // default 30000, wait until a response in a cy.request(), cy.wait(), cy.fixture(), cy.screenshot()
  },
});

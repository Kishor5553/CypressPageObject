// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

// Import commands.js using ES2015 syntax:
import '../utilities/commands'
import '../utilities/action'
import 'cypress-mochawesome-reporter/register';   //for html reporter

// Alternatively you can use CommonJS syntax:
// require('./commands')
require ('cypress-xpath')
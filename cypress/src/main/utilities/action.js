Cypress.Commands.add('clickOnLocator',(locator)=>{
    cy.get(locator).should('be.visible').click();
})
Cypress.Commands.add('typeText',(locator, text)=>{
    cy.get(locator).should('be.visible').type(text);
})
Cypress.Commands.add('typeT',(locator, text)=>{
    cy.get(locator).should('be.visible').type(text);
})


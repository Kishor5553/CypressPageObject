/// <reference types="cypress" />

class LoginPage{


    loginLink="a[href='/login']";
    txtUserName="input[data-qa='login-email']";
    txtPassword="input[placeholder='Password']";
    loginBtn="button[data-qa='login-button']";

    clickOnLoginLink(){
        cy.clickOnLocator(this.loginLink)
        // cy.get(this.loginLink).should('be.visible').click()
    }
    enterUserName(username){
        cy.typeText(this.txtUserName, username)
        // cy.get(this.txtUserName).should('be.visible').type(username)
    }
    enterPassword(password){
        cy.get(this.txtPassword).should('be.visible').type(password)
    }
    enterInvalidPassword(invalidPassword){
        cy.get(this.txtPassword).should('be.visible').type(invalidPassword)
    }
    clickOnLoginBtn(){
        cy.get(this.loginBtn).should('be.enabled').click()
    }
    login(username,password){
        this.clickOnLoginLink()
        this.enterUserName(username)
        this.enterPassword(password)
        this.clickOnLoginBtn()
    }
 
}
export default new LoginPage();
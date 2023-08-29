/// <reference types="cypress-xpath" />

class HomePage{
    deleteAccountButton="a[href='/delete_account']";
    productsLink = "a[href='/products']";
    product = "//div[@class='productinfo text-center']//p[contains(text(),'Blue Top')]";


    verifyDeleteAccountButtonDisplayed(){
        cy.get(this.deleteAccountButton).should('be.visible')
    }
    clickOnProductsLink(){
        cy.get(this.productsLink).click()
    }
    chooseProduct(){
        cy.xpath(this.product).click()
    }
}
export default new HomePage();
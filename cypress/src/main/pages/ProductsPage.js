
class ProductsPage{

    continueShoppingButton = "//button[contains(text(),'Continue Shopping')]"

    clickOnContiniuShoppingButton(){
        cy.xpath(this.continueShoppingButton).click()
    }

}
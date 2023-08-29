import HomePage from "../../main/pages/HomePage";
import LoginPage from "../../main/pages/LoginPage";
/// <reference types="cypress-xpath" />

describe('Add To cart ', () => {
    let data;
    before('Loading Data', ()=>{
        cy.fixture("autoExercise.json").then((datas)=>{
            data=datas
        })
    })
    
    it('Adding product', () => {
        cy.visit("/")
        LoginPage.login(data.username ,data.password);
        HomePage.verifyDeleteAccountButtonDisplayed();
        HomePage.clickOnProductsLink();
        HomePage.chooseProduct();

    });

});
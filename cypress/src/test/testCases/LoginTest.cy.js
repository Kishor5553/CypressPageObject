import LoginPage from "../../main/pages/LoginPage"
import HomePage from "../../main/pages/HomePage"
// import data from "../resources/autoExercise.json"

describe('Automation Exercise', ()=> {
    let data;
    before('Loading Data', ()=>{
        cy.fixture("autoExercise.json").then((datas)=>{
            data=datas
        })
    })
    it('Login @smoke' ,()=> {
       cy.visit("/")
         LoginPage.clickOnLoginLink()
         LoginPage.enterUserName(data.username)
         LoginPage.enterPassword(data.password)
         LoginPage.clickOnLoginBtn()
         HomePage.verifyDeleteAccountButtonDisplayed();
   })
})

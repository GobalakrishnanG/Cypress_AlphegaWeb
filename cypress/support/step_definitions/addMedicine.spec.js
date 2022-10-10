import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { webAppPage } from "../page_objects/webAppPage";


Given('Add medicine for the main user', () => {
    
    webAppPage.getApiCallPage().login_headless_with_api();
    webAppPage.getPrescriptionsPage().add_Medicine();

 })

Then('I want to verify the prescritpions page heading and delete the added medicine', () => {
    // Assertion...
    cy.get('[data-qa="repeat_medicine"]').invoke('text').then( heading => {
        expect(heading).to.equal('Repeat medicines')
    })   
    // Delet the added medicine via api
    webAppPage.getApiCallPage().deleteMedicine() 
    
})
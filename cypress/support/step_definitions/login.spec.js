import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { webAppPage } from "../page_objects/webAppPage";
import loginCredentials from "../../fixtures/loginCredential.json";


Given('Open the Alphega site and sign up with valid credentials', () => {
  
  cy.launch_web()
  webAppPage.getHomePage().signUp_with_valid_credentials(loginCredentials.signUp_valid_username, loginCredentials.signUp_valid_password)

})

Then('Text should have {string}', (title) => {
  cy.contains('Gobi 1002')
})
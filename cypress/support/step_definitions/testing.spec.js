import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { webAppPage } from "../page_objects/webAppPage";


Given('Testing api calls', () => {

  webAppPage.getApiCallPage().deleteMedicine()
  
})
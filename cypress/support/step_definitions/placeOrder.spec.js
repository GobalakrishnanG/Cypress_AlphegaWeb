import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { webAppPage } from "../page_objects/webAppPage";


Given('Place an order from prescriptions screen', () => {
    
        webAppPage.getApiCallPage().login_headless_with_api();
        webAppPage.getPrescriptionsPage().add_Medicine();
        webAppPage.getOrderPage().place_order_from_prescriptionScreen();

    })
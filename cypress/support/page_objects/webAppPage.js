import { HomePage } from "./homePage";
import { PrescriptionsPage } from "./prescriptionsPage";
import { ApiCallPage } from "./apiCallPage";
import { OrderPage } from "./orderPage";


export class WebAppPage {

    constructor() {
        this.homePage = new HomePage();
        this.prescriptionsPage = new PrescriptionsPage();
        this.apiCallPage = new ApiCallPage();
        this.orderPage = new OrderPage();
    }

    getHomePage() {
        return this.homePage;
    }

    getPrescriptionsPage() {
        return this.prescriptionsPage;
    }

    getApiCallPage() {
        return this.apiCallPage;
    }

    getOrderPage() {
        return this.orderPage;
    }

}

export const webAppPage = new WebAppPage()
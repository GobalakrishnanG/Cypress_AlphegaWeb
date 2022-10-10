

export class OrderPage {

    place_order_from_prescriptionScreen() {
        cy.wait(3000)
        cy.get('input[type="checkbox"]').check({force: true})
        cy.contains('button', 'Order').click()
        cy.get('svg[data-testid="RadioButtonUncheckedIcon"]').then( ele => {
            cy.wrap(ele).eq(1).click()
        })
        cy.get('[id="delivery-options-proceed"]').click()
        cy.contains("Pay on collection").then( ele => {
            cy.wrap(ele).click()
        })
        cy.get('[id="select-payment-method-proceed"]').click()
        cy.get('[id="place-order"]').then( ele => {
            cy.wrap(ele).click()
        })
        cy.contains('Done').then( ele => {
            cy.wrap(ele).click()
        })
    }
}
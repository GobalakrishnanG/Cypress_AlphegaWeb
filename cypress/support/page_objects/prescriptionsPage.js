
export class PrescriptionsPage {

    add_Medicine() {
        cy.get('#onetrust-accept-btn-handler').click()
        cy.wait(3000)
        cy.contains('Prescriptions').click()
        cy.wait(3000)
        cy.get('[data-qa="select_main_patient"]').click({force: true})
        cy.contains('Add medicine').click()
        cy.get("#autocomplete-medicine").click().type('Amoxi')
        cy.contains('Amoxicillin').click()
        cy.contains('Continue').click()
        cy.get("#strength-id").click()
        cy.contains('250mg').click()
        cy.get('#medicine-type-id').click()
        cy.contains('A repeat prescription').click()
        cy.get('#frequency-id').click()
        cy.contains('28-day cycle').click()
        cy.contains('Continue').click()
        
    }
}
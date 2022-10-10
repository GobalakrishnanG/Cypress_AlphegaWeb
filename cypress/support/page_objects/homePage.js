
export class HomePage {
    
    signUp_with_valid_credentials(username, password) {
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('[data-qa="sign_in"]').click()
        cy.get('[data-qa="continue_with_email"]').click()
        cy.get('[id="user-email"]').type(username)
        cy.get('[data-qa="continue"]').click()
        cy.get('[id="user-password"]').type(password)
        cy.get('[type="submit"]').click()
    }

}

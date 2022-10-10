import endpoint from "../../fixtures/endpoint.json";


export class ApiCallPage {

    // 1. POST User to get Token
    postUserToken() {
        cy.request({
            method: 'POST',
            url: endpoint.getTokens,
            headers: endpoint.headers,
            body: endpoint.userDetailsDev
            }).its('body').as('response')
            // get this response date by 'cy.get(@response)'
    }

    // 2. GET User & Dependant Remedies
    getUserRemedies(token, userID) {
        cy.request({
            method: 'GET',
            url: `https://api.dev-healthera.co.uk/patients/${userID}/remedies?includeDependents=true`,
            headers: {...endpoint.headers, "token": token}
            }).its('body').as('remedies')
            // get this response date by 'cy.get(@remedies)'
    }

    // 3. Delete user first api response medicine (including dependants)
    deleteMedicine() {
        this.postUserToken()
        cy.get('@response').then( response => {
            const token = response.data[0].token;
            const userID = response.data[0].user.user_id;
            this.getUserRemedies(token, userID)
            cy.get('@remedies').then( remedies => {
                const remedyID = remedies.data[0].remedy_id
                cy.request({
                    method: 'DELETE',
                    url: `https://api.dev-healthera.co.uk/patients/${userID}/remedies/${remedyID}?keep_adherences=false`,
                    headers: {...endpoint.headers, "token": token},
                    })
              })
          })  
    }

    // 4. Login User with Headless mode
    login_headless_with_api() {
        this.postUserToken()
        cy.get('@response').then( response => {
            const username = response.data[0].user.username;
            const refreshToken = response.data[0].refresh_token;

            cy.visit('/', {
                onBeforeLoad (win) {
                    win.localStorage.setItem('username', JSON.stringify(username))
                    win.localStorage.setItem('refresh_token', JSON.stringify(refreshToken))
                }
            })
            
        })
    }

    
}
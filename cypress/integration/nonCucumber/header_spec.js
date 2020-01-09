describe('Header navigation Test', function () {
    it('Loading home page.', function () {
        cy.visit('http://localhost:4200')
    })

    // Header while NOT logged in.
    it('NOT logged in - Header visibility', function () {
        cy.get('a.navbar-brand').contains('Recipe Book').should('be.visible')
        cy.get('a').contains('Authenticate').should('be.visible')
        cy.contains('Recipes').should('not.be.visible')
        cy.get('a').contains('Shopping List').should('be.visible')
    })

    // Header while logged in.
    it('Logged in - Header visibility', function () {
        cy.login('test@test.com','123123')
        cy.contains('Recipes').should('be.visible')
        cy.contains('Shopping List').should('be.visible')
        cy.contains('Logout').click()
        cy.url().should('contain', '/auth')
    });
})
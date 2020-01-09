describe('Login as user', function () {
    it('Login test', function () {
        cy.login('test@test.com', '123123')
    })
})


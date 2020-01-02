it('Creates a recipe', function () {
    cy.login('test@test.com', '123123')
    cy.get('button').contains('New Recipe').click()
    cy.get('input#name').type('Awesome potato smoothie')
    cy.get('input#imagePath').type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7bmd8uVrJLhlzjSCmJAXz7aiyRqDSRL9RgpOt6TO1os4AKwC&s')
    cy.get('textarea#description').type('Alot of tasty potato flavors!')
    cy.get('button').contains('Add Ingredient').click()
    cy.get('input[formControlName=name]').eq(1).type('Potato');
    cy.get('input[formControlName=amount]').eq(0).type('3');
    cy.get('button').contains('Add Ingredient').click()
    cy.get('input[formControlName=name]').eq(2).type('Oregano');

    cy.get('input[formControlName=amount]').eq(1).type('-1');
    cy.get('button[type=submit]').should('be.disabled')

    cy.get('input[formControlName=amount]').eq(1).clear().type('1');
    cy.get('button[type=submit]').should('not.be.disabled')
    cy.get('button[type=submit]').click()
    cy.contains('Logout').click()

})
import { Given, And, When, Then, A } from "cypress-cucumber-preprocessor/steps";
 
Given('I visit auth page', () => {
    cy.visit('/auth')
});

And('I input the email {string}', (email) => {
    cy.get('input[name=email]').type(email)
});

And('I input the password {string}', (password) => {
    cy.get('input[name=password]').type(password)
});

When('I press login', () => {
    cy.get('button[type=submit]').click()
});

Then('the url on the website should contain {string}', (contain) => {
    cy.url().should('contain', (contain))
});
import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
 
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

Then('error message {string} should appear', (contain) => {
    cy.get('p').should('contain', (contain))
});
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
 
Given('I visit auth page', () => {
    cy.visit('/auth')
});

When('I input the email {string} and password {string} and press login', (email, password) => {
    cy.get('input[name=email]').type(email)
    cy.get('input[name=password]').type(password)
    cy.get('button[type=submit]').click()
});

Then('the url on the website should contain {string}', (contain) => {
    cy.url().should('contain', (contain))
});